import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Home = ()=>{

    const navigate = useNavigate();



    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e)=>{
        e.preventDefault();
        const id = uuid();
        setRoomId(id);
        // toast
        toast.success('Created a new room')
    };

    const joinRoom = (e)=>{
        
        e.preventDefault();

        if(!roomId || !username){
            toast.error('Room Id & Username is required');
            return ;
        }

        // redirect

        navigate(`/editor/${roomId}`, {
            state: {
                username
            }
        })
    }

    return (
        <div className='homePageWrapper'>

            <div className='formWrapper'>
                <img src='code-sync.png' className='homepageLogo'></img>
                <h4 className='mainLabel'>Paste invitation Room ID</h4>

                    <form className='inputGroup'>

                    <input type='text' className='inputBox' placeholder='ROOM ID' onChange={(e)=>setRoomId(e.target.value)} value={roomId}/>
                    <input type='text' className='inputBox' placeholder='USERNAME' onChange={(e)=>setUsername(e.target.value)}/>
                    <button type='submit' className='btn joinBtn' onClick={joinRoom}>Join</button>

                    </form>
                   
                    <span className='createInfo'>Don't have an invite link? <a onClick={createNewRoom} href='' className='createRoomBtn'>Create Room</a></span>

            </div>

            <footer>
                <h4>Built with 💚 by Yusuf</h4>            
            </footer>
        
        </div>
    )
}

export default Home;