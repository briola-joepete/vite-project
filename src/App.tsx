import './App.css'

function Box() {  
  return (
    <img
      className="box-1"
    />
  );
}

interface BoxProps {
  size?: string | number;
}

function Square({ size = 's' }: BoxProps) {
  const boxStyle = {
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
  };

  return (
    <div className="box" style={boxStyle}>
      CPEITEL3
    </div>
  );
}

export default function Profile() {
  return (
    <div className="main-container">
      <div className="profile-container">
        <h3>JOE PETE BRIOLA</h3>
        <Box/>
        <Square size={100}/>
      </div>
    </div>
  );
}