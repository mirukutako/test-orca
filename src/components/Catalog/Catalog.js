import { Wrapper } from './Catalog.styles'
import { data } from '../../data/data'

import CatalogItem from './CatalogItem'

const Catalog = ({ viewActive, handleModalVisible }) => {
  return (
    <Wrapper className="catalog-wrapper" data-view={viewActive}>
      <div className="catalog-header" data-view={viewActive}>
        <div className="catalog-header__cell catalog-header__status"></div>
        <div className="catalog-header__cell catalog-header__name">
          <span className="caption">Name</span>
        </div>
        <div className="catalog-header__cell catalog-header__file">
          <span className="caption">File name</span>
        </div>
        <div className="catalog-header__cell catalog-header__ip-v4">
          <span className="caption">IP Address v4</span>
        </div>
        <div className="catalog-header__cell catalog-header__ip-v6">
          <span className="caption">IP Address v6</span>
        </div>
        <div className="catalog-header__cell catalog-header__source">
          <span className="caption">Scan source</span>
        </div>
      </div>
      <div className="catalog" data-view={viewActive}>
        {data.map(item => {
          return (
            <CatalogItem
              key={item.id}
              item={item}
              viewActive={viewActive}
              handleModalVisible={handleModalVisible}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Catalog
