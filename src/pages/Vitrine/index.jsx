import { Container } from "../../style/global";
import { ThemeBody, ThemeBodyLink, ThemeTitle } from "../../style/typography";
import { Aside, Header, List, Main, Section } from "./styles";
import Logo from "./../../assets/logo.svg";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import Card from "../../components/ProductCard";
import { ThemeButton } from "../../style/buttons";

const Vitrine = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    api.get("/products").then(response => setProducts(response.data));
  }, [products]);

  useEffect(() => {
    setFiltered(
      products.filter((product) => {
        return (
          product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          product.category.toLowerCase().includes(inputValue.toLowerCase())
        );
      })
    );
  }, [inputValue]);

  return (
    <>
      <Header>
        <div className="header-box">
          <img src={Logo} alt="Logo" />
          <input
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder="Digite sua pesquisa"
          />
        </div>
      </Header>
      <Main>
        <Container>
          <Section>
            {inputValue.length > 0 ? (
              <ThemeTitle
                tag={"h1"}
                className={"title1"}
                color={"var(--Grey-4)"}
              >
                Resultados para: {inputValue}
              </ThemeTitle>
            ) : (
              ""
            )}
            <List>
              {filtered.length === 0 ? (
                <>
                  {products.map((product, index) => (
                    <Card
                      key={index}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                    />
                  ))}
                </>
              ) : (
                <>
                  {filtered.map((product, index) => (
                    <Card
                      key={index}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                    />
                  ))}
                </>
              )}
            </List>
          </Section>
          <Aside>

            <div className="aside-top">
              <ThemeTitle tag={"h3"} className={"title3"} color={'var(--White)'}>
                Carrinho de compras
              </ThemeTitle>
            </div>

            
            <div className="aside-middle">
            {
              cart.length === 0 ? (
                <>
                  <ThemeTitle tag={"h3"} className={"title3"} color={'var(--Grey-4)'}>
                    Seu carrinho está vazio
                  </ThemeTitle>
                  <ThemeBodyLink>Adicione itens</ThemeBodyLink>
                </>
              )
              :
              (
                <>
                  <ul>
                    <li>
                      <div>
                        <img src="" alt="" />
                      </div>
                      <div>
                        <h3>titulo</h3>
                        <span>categoria</span>
                      </div>
                      <div>
                        <button>Remover</button>
                      </div>
                    </li>
                  </ul>
                </>
              )
            }
            </div>
            <div>
              <div>
                <p>total</p>
                <p>preço</p>
              </div>
              <ThemeButton buttonSize={"lg"} buttonStyle={"outline"}>
                Remover Todos
              </ThemeButton>
            </div>
          </Aside>
        </Container>
      </Main>
    </>
  );
};
export default Vitrine;
