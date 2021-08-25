import { useRouter } from 'next/router';
import {executeQuery as db} from '../../lib/db';

const Post = () => {
  const router = useRouter()
  console.log(router.query);
  const { pid } = router.query;
  //let data:any = await db('SELECT * FROM Projekte');

  return (
    <div id="page-container">
			<div id="content-wrap" style={{paddingTop:"100px"}}>
        <h1>{}</h1>
				<a href="/projects/"><button className="backButton fuller-button fuller-button-blue">BACK</button></a>
				<div id="slider">
					<div id="primary-slider" className="splide">
						<div className="splide__track">
							<ul className="splide__list">
								{/*'<li class="splide__slide"><img src="/assets/project_pictures/'.$img.'" /></li>'; */ }
							</ul>
						</div>
					</div>
					<div id="secondary-slider" className="splide">
						<div className="splide__track">
							<ul className="splide__list">
										{/*'<li class="splide__slide"><img src="/assets/project_pictures/'.$img.'" /></li>'; */ }
							</ul>
						</div>
					</div>
				</div>

				<div id="beschreibungLang">
					{/*<?PHP echo $data["BeschreibungLang"]; ?>*/}
				</div>
			</div>
		</div>
  )
}

export default Post