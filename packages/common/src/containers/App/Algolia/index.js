import algoliasearch from 'algoliasearch';
import {
    InstantSearch,
    SearchBox,
    Hits, 
    Highlight,
} from 'react-instantsearch-dom';
import Image from '../../../layout/elements/Image';
import Link from '../../../layout/elements/Link';
import closeIcon from '../../../assets/image/app/x.svg';
import whiteCloseIcon from '../../../assets/image/app/xWhite.svg';
import {
    Wrapper,
    ResultWrapper
} from './style'

const algoliaClient = algoliasearch('8H15QKQJP4', '85569cd471ac2f0c5169689359dc5463');
let firstLoad = true;

import { Stats } from 'react-instantsearch-dom';

const searchClient = {
    search(requests) {
        const shouldSearch = requests.some(({ params: { query } }) => query !== '');
        // don't search on first load
        if (firstLoad) {
            firstLoad = false;
            return;
        }
        // make sure the input box is not empty before searching
        if (!shouldSearch)
            return Promise.resolve({
                results: [{ hits: [], nbHits: -1 }],
            });
        return algoliaClient.search(requests);
    },
};


const Hit = (props) => {
    const {Restaurant} = props.hit
    return (<ResultWrapper>
        <div className="textWrapper">
            <Link href={`/merchant/${Restaurant.id}`} className="hit-name">
                <span>{Restaurant.name}</span>
                {/* <Highlight attribute="name" hit={props.hit} tagName="mark" /> */}
                <div className="hit-description">
                <span> {Restaurant.address} </span>
                {/* <Highlight attribute="about" hit={props.hit} tagName="mark" /> */}
                </div>
            </Link>
        </div>
        <Image className="image" alt="ayazona asset" src={`https://r.cdn.ayazona.com/${Restaurant.image}`} align="right" alt={Restaurant.name} />
    </ResultWrapper>)
}
  
const App = ({textColor, searchColor}) => (
    <Wrapper textColor={textColor} searchColor={searchColor} >
        <InstantSearch searchClient={searchClient} indexName="ayazona">
            <SearchBox 
                reset={<Image className="ais-SearchBox-resetIcon" alt="ayazona asset"  src={textColor == "#fff" ? whiteCloseIcon: closeIcon} />}
                translations={{
                    submitTitle: 'search by name, location or cuisine',
                    resetTitle: 'Clear.',
                    placeholder: 'Search for anything...',
                }}
            />
            <Hits hitComponent={Hit} />
            <Stats 
                translations={{
                    stats(nbHits) {
                        return `${nbHits == 0 ? "No match found": ""}`;
                    },
              }}/>
        </InstantSearch>
    </Wrapper>);

export default App;
