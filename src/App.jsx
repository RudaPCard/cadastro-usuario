import { Container, Form, Input, InputLabel, Title, TopBackground } from "./styles"

function Home() {



  return (
    <Container>

      <TopBackground>
        <img />
      </TopBackground>

      <Form>
        <Title>Cadastrar usuário</Title>

        <ContainerInputs>
          <div>
            <div>

              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do usuário" />
            </div>

            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do usuário" />
            </div>

          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" />
          </div>

        </ContainerInputs>

        <button> Cadastrar usuário</button>

      </Form>

    </Container>
  )
}

export default Home
