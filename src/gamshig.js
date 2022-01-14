import "./App.scss"
import { useParams } from 'react-router-dom'
const Gamshig = () => {
    let { episode } = useParams()
    return (
        <div className="center black">
            {
                Array(14).fill(0).map((a, index) => {
                    return <img key={index} src={`http://zuragtnom.site/uploads/manga/gamshig-baatar/chapters/ch${episode}/${index + 1 < 10 ? `0${index + 1}` : index + 1 }.jpg`} alt="1" />
                })
            }
        </div>
    )
}
export default Gamshig;

