import { BiSolidError } from "react-icons/bi";
import '../styles/error.css'

const Error = () => {
	return (
		<section className="error">
			<BiSolidError className="icon-error" />
			<h2>Página no encontrada</h2>
		</section>
	)
}

export default Error