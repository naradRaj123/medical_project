import { addAdvice, addDiagnosis, addMedicine, addScan, addTest } from '@/app/redux/slices/prescription-slice'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import SignatureCanvas from 'react-signature-canvas'

const Canvas = ({width=1000, height=10000, val}) => {

  const dispatch = useDispatch();

  const [sign, setSign] = useState()
  const [url,setUrl] = useState();

  const handleClear=()=>{
    sign.clear();
    setUrl('');
  }

  const handleSave=()=>{
    console.log("Props received by Canvas:", val);
    setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
    switch (val) {
      case "Diagnosis" :
    dispatch(addDiagnosis(sign.getTrimmedCanvas().toDataURL('image/png')));
        break;

      case "scan" :
    dispatch(addScan(sign.getTrimmedCanvas().toDataURL('image/png')));
        break;

      case "test" :
    dispatch(addTest(sign.getTrimmedCanvas().toDataURL('image/png')));
          break;

      case "advice" :
    dispatch(addAdvice(sign.getTrimmedCanvas().toDataURL('image/png')));
            break;

      case "medicines" :
    dispatch(addMedicine(sign.getTrimmedCanvas().toDataURL('image/png')));
          break;
    }
  }

  return (
    <>
    <div className='h-full overflow-y-scroll overflow-hidden'>
    <SignatureCanvas penColor='green'
    canvasProps={{width: width, height: height, className: 'sigCanvas border'}}
    ref={data=> setSign(data)} />
    </div>
    <div className='flex justify-around my-2'>
    <button
    className='text-primary border rounded-sm border-primary px-3' 
    onClick={handleClear} >Clear</button>
    <button 
    className='text-primary border rounded-sm border-primary px-3' 
    onClick={handleSave} >Save</button>
    </div>
    {/* <img src={url} /> */}
    </>
  )
}

export default Canvas ;
