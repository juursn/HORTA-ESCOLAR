export const Footer = () => {
	return (
		<>
			<footer className="bg-purple-400 mt-10 flex flex-col items-center px-5">
				<h3 className="font-medium py-4 text-center">
					©ECIT Manoel Lisboa de Moura
				</h3>
				<div className="space-y-2 md:flex md:gap-12">
					<div>
						<p className="font-medium">Localização:</p>
						<p>Rua: Rua Antônio Claudinho Leal</p>
						<p>Bairro: Costa e Silva</p>
						<p>CEP: 58082-050</p>
						<p>Cidade: João Pessoa</p>
						<p>País: Brasil</p>
					</div>
					<div>
						<p className="font-medium">Contato:</p>

						<p>
							Instagram:
							<a
								href="https://www.instagram.com/ecitmanoellisboa/"
								target="_blank"
								rel="follow"
								className="transition-all duration-200 hover:underline hover:underline-offset-2"
							>
								@ECITMANOELLISBOA
							</a>
						</p>
					</div>
				</div>
				<p className="text-center py-4 font-medium">
					Cultivar hoje para colher um futuro melhor 🌿
				</p>
			</footer>
		</>
	)
}
