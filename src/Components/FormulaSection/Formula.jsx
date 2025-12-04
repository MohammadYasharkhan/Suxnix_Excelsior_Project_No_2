import './Formula.css'

function Formula()
{   
    return <div id='formula_section'>
        <div className='container'>
            <div className='row'>

            <div className='col-xxl-6 col-lg-7'>
                    <div className='formula_heading_section'>
                        <p className='sub_title'>.. Suxnix Formula ..</p>
                        <h2 className='title'>Why We Chose This Formula</h2>
                    </div>
                    <ul className='formula_list'>
                        <li>Tastes like dessert without added sugars or sugar alcohols</li>
                        <li>No artificial sweeteners, dairy, say or corn fiber</li>
                        <li>10G of collagen protein from grass-fed cows</li>
                        <li>Formulated to reduce blood sugar intact</li>
                        <li>Organic almond Butter, Sunflower Lecithin</li>
                        <li>No energy crashes. Collagen Protein, Stevia</li>
                        <li>10G of collagen protein from grass-fed cowsKnow More</li>
                    </ul>
            </div>
            <div className='col-xxl-6 col-lg-5'>
                <div className='formula_image_conatiner'>
                    <img src="/assets/images/formula_img.webp" alt="formula_image" />
                </div>
            </div>
            </div>
        </div>
    </div>
}

export default Formula;