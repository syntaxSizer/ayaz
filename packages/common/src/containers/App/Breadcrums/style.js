import styled from 'styled-components';

const Container = styled.div`
display: inline-block;    
border-radius: 12px;
background-color: rgb(0 0 0 / 30%);
padding: 1px 20px 2px;

.browse-breadcrumb {
    list-style: none;
    margin: 0;
    padding: 0;
    >li {
        display: inline-block;
        font-weight: 400;
        font-family: Ayazona,"Helvetica Neue",Helvetica;
    }
    >li+li:before {
        padding: 0 5px;
        color: #ccc;
        content: "/";
    }
    >li a {
        color: #fff;
        text-transform: capitalize;
    }
}
`;
export default Container;