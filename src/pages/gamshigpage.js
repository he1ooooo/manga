import "../App.scss"
import Header from "../components/header";
import { Link } from 'react-router-dom'
const Gamshigpage = () => {
    return (
        <div>
            <div className="biy">
                <div className="row">
                    <img className='gamshigzurag' src="data:image/jpeg;base64,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"
                        alt="zurag" />
                    <div className="deedtal columncenter ">
                        <dl>
                            <dt className="space"> Төлөв: Ongoing</dt>
                            <dt className="space"> Зохиолч: SAN.G (산지직송)</dt>

                            <dt className="space">Ангилалууд: Тулаант ,  Адал явдалт ,  Инээдмийн ,  Ер бусын ,  RPG ,  Онцгой чадвар</dt>
                            <dt className="space">Үзсэн: 5696</dt >
                            <dt className="space">Үнэлгээ : 1 2 3 4 5</dt>
                            <dt className="space">Дундаж 5/5 out of 10 total votes.</dt>
                        </dl>
                    </div>
                </div >
                <div className="buheeg">Танилцуулга:
                    Дэлхийн хамгийн хүчирхэг гэгдэх нэгэн баатар байсан. "Гэхдээ тэр үхсэн. Яаж үхсэн хүн буцаж ирдэг юм?" "Тийм ээ. Эргэж ирээд үзэг л дээ." Гэсэн ч 20 жилийн дараа тэр үнэхээр буцаад ирлээ! "Та нар юундаа цочирдсон юм? Ямар нэг гэмших зүйл хийгээ юу?" "Муу новшнууд. Би тэднийг зүгээр өнгөрөөхгүй."</div>
                {
                    Array(23).fill(0).map((a, angi,index)    => {
                        angi++;
                        return <Link to={`/gamshig/0${angi < 10 ? `0${angi}` : angi}`}>
                            <div>Гамшиг-түвшний баатар эргэж ирсэн {angi}</div></Link>
                    })

                }
{/* to={`/gamshig/0${angi<10? `${0${angi}}`: angi}`} */}

            </div>
        </div>
    )
}
export default Gamshigpage;
