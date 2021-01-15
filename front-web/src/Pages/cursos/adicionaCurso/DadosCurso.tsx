import VoltarBotao from '../../../components/buttons/VoltarBotao';
import ConfirmarBotao from '../../../components/buttons/ConfirmarBotao';
import CodigoCursoInput from './CodigoCursoInput';
import NomeCursoInput from './NomeCursoInput';

export default function DadosCurso() {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="title">Cadastrar Curso</h5>
            </div>
            <div className="card-body">
                <form>
                    <fieldset>
                        <legend>Informações do Curso</legend>
                        <div className="row">
                            <CodigoCursoInput />
                            <NomeCursoInput />
                        </div>
                    </fieldset>
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <VoltarBotao link="/registro-de-cursos"/>
                        <ConfirmarBotao textoBotao="Cadastrar Discente" />
                    </div>
                </form>
            </div>
        </div>
    );
}