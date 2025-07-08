import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';



export function Settings() {

  return (
    <>
      <MainTemplate>
        <Container>
          Configurações
        </Container>
        <Container>
          <p>Modifique as configurações para tempo de foco, descanso curto e descanso longo</p>
        </Container>
      </MainTemplate>
    </>
  );
}