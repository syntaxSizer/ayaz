import React from 'react';
import {starEmpty} from 'react-icons-kit/icomoon/starEmpty'
import {starFull} from 'react-icons-kit/icomoon/starFull'
import { Icon } from 'react-icons-kit';
import Wrapper from './style';
import { useSelector, useDispatch } from 'react-redux';
import {
    toggleModalView,
} from '../../../data/store/reducers/cart/actions';
 import { API } from '../../../data/Account';

import { fetchFavorites } from '../../../data/store/reducers/auth/actions';

const FavoriteItem = ({aisleId}) => {
    const { isLoggedIn, user, favouriteItems} = useSelector(({ auth }) => auth);
    const [ids, setIds] = React.useState([]);
    React.useEffect(()=>{
        console.log(favouriteItems)
        setIds((favouriteItems || []).map(({id})=> id));
    }, [favouriteItems])
    const dispatch = useDispatch()
    const openLoginModal = () =>
    dispatch(toggleModalView({ component: 'LoginModal', isLogIn: true }));
    const changeStatus = () => {
        if (!isLoggedIn) {
            openLoginModal();
            return;
        }
        if (ids.includes(aisleId)) {
            API.addFavorite({
                user_id: user.user_id,
                aisle_id: aisleId,
                "favourite": "1"
            }).then(()=> {
                dispatch(fetchFavorites(user.user_id))
            })
        }
        else {
            API.addFavorite({
                user_id: user.user_id,
                aisle_id: aisleId,
                favourite: "0"
            }).then(()=> {
                dispatch(fetchFavorites(user.user_id))
            })
        }
    }
     return (<Wrapper>
        {/* <span className="tooltip">{`${ids.includes(aisleId) ? "remove from": "add to"} Favorites`}</span> */}
        <Icon className="iconItem" onClick={changeStatus} icon={ids.includes(aisleId) ? starFull: starEmpty} size={22} />
    </Wrapper>)
}

export default FavoriteItem;