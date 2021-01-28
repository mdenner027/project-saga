import VoltarBotao from '../../../components/buttons/VoltarBotao';
import ConfirmarBotao from '../../../components/buttons/ConfirmarBotao';
import NomeDemandaInput from './NomeDemandaInput';

export default function DadosDemanda() {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="title">Cadastrar Demanda</h5>
            </div>
            <div className="card-body">
                <form>
                    <fieldset>
                        <legend>Informações da Demanda</legend>
                        <div className="row">
                            <NomeDemandaInput/>
                        </div>
                    </fieldset>
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <VoltarBotao link="/registro-de-demandas"/>
                        <ConfirmarBotao textoBotao="Cadastrar Demanda" />
                    </div>
                </form>
            </div>
        </div>
    );
}