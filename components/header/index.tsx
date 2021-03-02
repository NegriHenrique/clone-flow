import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import { ImMenu3, ImMenu4 } from 'react-icons/im'

const Header: React.FC = () => {
	const [menuMobileAberto, setMenuMobileAberto] = useState(false)
	return (
		<>
			<header className={styles.cabecalho}>
				<img src={process.env.URL_LOGO} alt="Logo flow" />
				<nav>
					<button className={styles.menumobile} onClick={() => setMenuMobileAberto(!menuMobileAberto)}>
						{menuMobileAberto ?
							<ImMenu4 /> :
							<ImMenu3 />
						}
					</button>
				</nav>
			</header>

			{menuMobileAberto &&
				<ul className={styles.containerMenuMobile}>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Loja</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Comprar FlowCoins</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Carteira FlowCoins</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Episódios</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Concursos</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Membros</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Login/Cadastro</a>
						</Link>
					</li>
				</ul>
			}
		</>
	);
}

export default Header;