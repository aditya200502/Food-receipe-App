import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

function Recipe() {

    const API = 'e9fa0f4495c54432882203bf2b39daa1';

    let params = useParams({});

    const [info, setinfo] = useState({});
    const [active, setactive] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API}`)
        const detaildata = await data.json();
        console.log(detaildata);
        setinfo(detaildata);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name])

    return (
        <Wrapper>
            <div>
                <h2>{info.title}</h2>
                <img src={info.image} alt="" />
            </div>
            <Info>

                <div className="clear">
                    <Button className={active === 'instructions' ? 'active' : ''} onClick={() => setactive("instructions")}>Instructions</Button>
                    <Button className={active === 'ingredients' ? 'active' : ''} onClick={() => setactive("ingredients")}>Ingredients</Button>
                </div>
                {active === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: info.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: info.instructions }}></h3>
                    </div>

                )}

                {active === 'ingredients' && (

                    <ul>
                        {info.extendedIngredients.map((ingredient) => {
                            return (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            )
                        })}
                    </ul>
                )}

            </Info>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background-color:#494949;
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size:1.2rem;
        line-height: 1.5rem;
    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    display: flex;
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    font-weight: 600;
    margin-right: 2rem;
`;

const Info = styled.div`
    margin-left: 10rem;
    .clear{
        display:flex;
    }
`;

export default Recipe
