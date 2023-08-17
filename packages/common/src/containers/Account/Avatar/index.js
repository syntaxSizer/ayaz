import React from 'react';
import Wrapper from './style';
import Image from '../../../layout/elements/Image'
import avatarImg from '../../../assets/image/app/avatar1.png';
import { Icon } from 'react-icons-kit';
import { ic_cloud_upload } from 'react-icons-kit/md/ic_cloud_upload';
import { useSelector } from 'react-redux';
import { API } from '../../../data/Account';

const Avatar = () => {
  const { user } = useSelector(({ auth }) => auth);
  const [url, setUrl] = React.useState(
    !!user.profile_img
      ? `https://r.cdn.ayazona.com/${user.profile_img}`
      : avatarImg
  );
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setUrl(
      !!user.profile_img
        ? `https://r.cdn.ayazona.com/${user.profile_img}`
        : avatarImg
    );
  }, []);
  const handlePreviewAndUpload = target => {
    let reader = new FileReader();
    reader.onloadend = () => {
      setUrl(reader.result);
      API.uploadImage({
        profile_img: [{ file_data: reader.result }],
        user_id: user.user_id,
      });
    };
    reader.readAsDataURL(target.files[0]);
  };

  const onChange = ({ target }) => {
    const FileSize = target.files[0].size / 1024 / 1024;
    if (FileSize > 5) {
      setError('Mximum 5MB image size');
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }
    let formData = new FormData();
    const files = Array.from(target.files);

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    handlePreviewAndUpload(target);
  };

  return (
    <Wrapper>
      <div className="button">
        <label htmlFor="single">
          <Image src={url} />
          <Icon
            style={{
              position: 'absolute',
              margin: '81px -30px',
              color: '#002524',
              cursor: 'pointer',
            }}
            size={24}
            icon={ic_cloud_upload}
          />
        </label>
        <input type="file" id="single" onChange={onChange} />
      </div>
      <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>
    </Wrapper>
  );
};

export default Avatar;
