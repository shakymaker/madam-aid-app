'use client';

const Splash = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#16a34a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div 
        style={{
          color: 'white',
          fontSize: '48px',
          fontWeight: 'bold',
          animation: 'fadeInUp 1s ease-out'
        }}
      >
        <img 
          src="/icon-512x512.png"
          alt="MadaMaid"
          style={{
            width: '200px',
            height: 'auto',
            animation: 'fadeIn 1.5s ease-in'
          }}
        />
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Splash;