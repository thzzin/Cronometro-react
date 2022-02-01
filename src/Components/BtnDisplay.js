import React from 'react'

function BtnDisplay(props) {
  return (
    <div>
        {(props.status === 0)?
        <button className='stopwatch-btn stopwatch-btn-gre'
        onClick={props.start}>Começar</button> : ""
    }

     {(props.status === 1)?
     
       <div>
           <button className='stopwatch-btn stopwatch-btn-red'
           onClick={props.stop}>Parar</button>
           <button className='stopwatch-btn stopwatch-btn-yel'
           onClick={props.reset
           }>Reiniciar</button>
       </div> : ""
    }

     {(props.status === 2)?
     
       <div>
           <button className='stopwatch-btn stopwatch-btn-red'
           onClick={props.resume}>Voltar</button>
           <button className='stopwatch-btn stopwatch-btn-yel'
           onClick={props.reset
           }>Reiniciar</button>
       </div> : ""
    }
        
    </div>
  );
}

export default BtnDisplay;
