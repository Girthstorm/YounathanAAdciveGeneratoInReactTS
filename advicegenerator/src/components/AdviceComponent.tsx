import deskdiv from '../images/pattern-divider-desktop.svg'


const AdviceComponent = (props: { message: string, id: number }) => {
    return (
        <div className='d-flex justify-content-center'>

            <div className="d-flex justify-content-center flex-column containerBox">

                <p className="text-center idText">Advice #{props.id}</p>
                <p className='text-center text-white adviceTxt'>"{props.message}"</p>
                <img id='change' src={deskdiv} alt="divider Bar" />
            </div>
        </div>
    );
}

export default AdviceComponent