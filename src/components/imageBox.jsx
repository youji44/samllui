import {Image} from 'antd';
export const ImageBox = ({width, url}) => {
  return (
    <div 
        style={{width,height:width, overflow:'hidden'}} 
        className='flex-center border-grey'
        >
        <Image
            src={url}
            alt='hair-trans'
            style={
                {
                    width:'auto',
                    height:'auto',
                    maxWidth:'100%',
                    maxHeight:'100%'
                }
            }
        />
    </div>
  )
}