import { GridItemType } from '../../types/GridItemType';
import * as C from './styles'
import b7svg from '../../svgs/b7.svg'
import {items} from '../../components/data/items'


type Props = {
  item: GridItemType;
  onClick: () => void;
}


export const GridItem = ({item, onClick}: Props) => {
  return(
    <C.Container 
    showBackground={item.permanentShow === true || item.shown === true}
    onClick={onClick}
    >
      {item.permanentShow === false && item.shown === false && 
        <C.Icon src={b7svg} opacity={.1} alt=""/>
      }
      {(item.permanentShow === true || item.shown === true) && item.item !== null &&
        <C.Icon src={items[item.item].icon} alt=""/>
      }
    </C.Container>
  );
}