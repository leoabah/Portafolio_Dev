import React from 'react'

function Background() {
  return (
    <div className='background'>
        <div className='gradient gradienteOne'></div>
        <div className='gradient gradienteTwo'></div>

        <div className='grid'></div>

        <div className='particles'>
            {[...Array(30)].map((_, index) => (
                <span 
                key={index}
                style={{
                    left:`${Math.random() * 100}%`,
                    animationDelay:`${Math.random() * 5}s`,
                    animationDuration:`${5 + Math.random() * 10}s`
                }}
                />
            ))}
        </div>
    </div>
  );
}

export default Background