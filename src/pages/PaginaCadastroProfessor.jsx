import FormularioProfessor from "../components/FormularioProfessor";

function PaginaCadastroProfessor(props) {
  return (
    <div className="pagina-cadastro">
      <h2>Cadastrar Professor</h2>
      <FormularioProfessor aoSalvar={props.aoSalvar} />
    </div>
  );
}

export default PaginaCadastroProfessor;