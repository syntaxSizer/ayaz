import Container from './style';

const BreadCrums = ({links}) =>{
    if (!links.length) {
        return <></>
    }
    return (
        <Container>
            <span>
                <ul className="browse-breadcrumb" itemscope=""  itemtype="http://schema.org/BreadcrumbList" data-testid="s-breadcrumb">
                    {links.map(link=>(
                        <li key={link.position} itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a itemprop="item" href={link.href}><span itemprop="name">{link.name}</span></a><meta itemprop="position" content={link.position} />
                        </li>
                    ))}
                </ul>
            </span>
        </Container>
    );
}

export default BreadCrums;