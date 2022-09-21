import food1 from '../../assets/food/food1.png';
import food2 from '../../assets/food/food2.png';
import food3 from '../../assets/food/food3.png';
import food4 from '../../assets/food/food4.png';

type Item = {
    descricao : string,
    img : any
}

export const items: Item[] = [
    {descricao:"Food1",img:food1},
    {descricao:"Food2",img:food2},
    {descricao:"Food3",img:food3},
    {descricao:"Food4",img:food4},
]