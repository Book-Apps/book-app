import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaAddressBook, FaArchive, FaBook, FaBookOpen, FaCalendarDay, FaCog, FaGreaterThan, FaHome, FaLessThan, } from 'react-icons/fa'
function Home() {
  const[Sidebar ,setsidebar]=useState(false)

  const toggle= ()=>{
    setsidebar(!Sidebar)
  }
  return (
    <>
  <div className='flex'>
  
    
    
            {Sidebar ? <div className='bg-slate-500  block w-80'>
             
         <ul className='mt-36 text-white font-bold' >
             <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
               
                 <a href="" className='px-3'>
                      <FaBookOpen className='inline-block w-8 h-6 mr-6'> <a href="" className='px-3'></a></FaBookOpen> 
                
                 </a>
                 <Link className='inline-block' to='mezmur'> <li>መዝሙር</li></Link> 
             </li>

             <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
                
                 <a href="" className='px-3'>
                      <FaBook className='inline-block w-8 h-6 mr-6'></FaBook> 
                    
                 </a>
                 <Link className='inline-block '  to='shortmezmur'><li>ሓጺር መዝሙር</li ></Link > 
             </li> 

             <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
                 <a href="" className='px-3'>
                      <FaHome className='inline-block w-8 h-6 mr-6'></FaHome> 
                   
                 </a>
                 <Link className='inline-block ' to='wereb'><li> ወረብ</li></Link>
             </li> 

             <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
                 <a href="" className='px-3'>
                      <FaAddressBook className='inline-block w-8 h-6 mr-6'></FaAddressBook> 
                   
                 </a>
                 <Link className='inline-block ' to='sbket'><li> ስብከት</li></Link>
             </li>  

             <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
                 <a href="" className='px-3'>
                      <FaArchive className='inline-block  w-8 h-6 mr-6'></FaArchive> 
                    
                 </a>
                 <Link className='inline-block ' to='favorite'><li>ማሕፉዳ</li></Link>
             </li> 

             <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
                 <a href="" className='px-3'>
                      <FaCalendarDay className='inline-block  w-8 h-6 mr-6'></FaCalendarDay> 
                    
                 </a>
                 <Link className='inline-block ' to='calender'><li>ዓውደ ኣዋርሕ</li></Link>
             </li> 

             <li className='mb-4 rounded hover:shadow hover:bg-blue-300 py-2'>
                 <a href="" className='px-3'>
                      <FaCog className='inline-block w-8 h-6 mr-6'></FaCog> 
                   
                 </a>
                  <Link className='inline-block ' to='setting'><li>setting</li></Link>
             </li> 
            
        </ul>
        </div>:null}
        
        <button onClick={toggle}>
          {Sidebar?<FaGreaterThan className='inline-block w-4  '/>:<FaLessThan className='inline-block w-4    '/>}
          
            </button>
        
    
  

    <div className='  w-full'>
   
             
<div className='bg-[url("ስርናይ.jpg")] bg-cover bg-no-repeat  w-full'>
<div className='text-center'>
    <div className='justify-items-center border border-y-4 '>
              <h1 className=' text-gray-950 font-extrabold text-3xl mt-5'>ናይ ማዓልቱ ንባብ</h1>
                <p className='  text-gray-950 font-bold text-2xl mt-5'>titel:ሰንበት ዘደብረ ዘይት
                </p>
                <p className='  text-black text-xl p-8 text-justify font-medium'>    ንባባት፡- 1ተሰ.4:13-ፍጻሜ ፣ 2ጴጥ 3፡7-15፣ ግ.ሓ. 24፡1-22፣ ማቴ 24:1-37።
 
 ቅዱስ ዳዊት፡  ኣብ መዝሙሩ  "እግዚአብሔር ብጋህዲ  ክመጽእ እዩ፥ ግናኸ ሰላሕላሕ ኢሉ ኣይኮነን ዝመጽእ ፥ ኣብ ቅድሜኡ ዝባላዕ ሓዊ ኣሎ፡ ህቦብላ ንፋስ እውን ይኸቦ" ይብል  (መዝ.50፡3)። 
 
  መዝሙር  “ጎይታና ኢየሱስ ክርስቶስ ኣብ ደብረ-ዘይቲ ተቐሚጡ ንኣርድእቱ፣ ብዙኃት ብስመይ አነ ክርስቶስ እየ እናበሉ ክመጹኹም እዮም እሞ ከየስሕቱኹም ተጠንቀቑ  ተሰናዲኹም ጽንሑ። እቲ ክሳብ መወዳእታ ተዓጊሱ ዝጸንሕ ንሱ ኪድኅን እዩ።  ኣብ ዳግማይ ምጽኣት ወድሰብ፡ ሓይሊ ሰማያትን ምድርን ኵሉ ክካወስ ጥዋዕዋዕ ክብል እዩ። ሽዑ ኩሎም ኃጥኣን   ኣብ ቅድሜኡ ክበኽዩ  እዮም።  ጎይታ ካብ ሰማይ ናብ ምድሪ ብትእዛዙን ብቓሉን ብአእላፋት መላእኽቱን ተዓጂቡ ብቃንዳ መለኸት  ክወርድ እዩ። በታ ሰዓት እቲአ ካብ ሞት ኃጢአት  ይምሓረና” ከመይ  ንሱ  ጎይታ ሰንበትን፡ ፈጣሪ- ሕይወትን  እዩ ። 
 
 ኃሙሻይ ሰንበት፡ ደብረ ዘይት ‘ማእከለ ጾም’ ተባሂሉ ይጽዋዕ (ፍርቂ ዘመን ጾም) ኣቲና ማለት እዩ። ‘ደብረ ዘይት’ ብሸነኽ ምሥራቅ ኢየሩሳሌም ዝርከብ ጎቦ እዩ። ዘሩባቤል ካብ ዝሰርሖ ቤተመቕደስ 75 ሜትሮ ንላዕሊ ብራኸ ዘሎዎ ቦታ ኢዩ። ኣብ ትሕቲኡ ድማ ቤተፋጌን ቢታንያን ጌተሰማኒ ዝበሃላ ታሪኻዊ ቦታታት ኣሎዉ። ማርቆስ ወንጌላዊ ኢየሱስ ጎይታ፡ ብዕለተ ሆሳእና ካብ ጸብረዘይት ናብ ኢየሩሳሌም ከምዝኸደ ይነግረና (ማር. 11:1)። ኣብ ደብረ-ዘይቲ ሒዝዎም ምስ ደየበ ከኣ እዮም  ቅዱሳን ሓዋርያት ብሕት ኢሎም. . . ትእምርቲ ምምጻእካን ናይ መወዳእታ ዓለም ምልክታቱን እንታይ እዩ፧ እዚ መዓስ እዩ ዚኸውን፧ እስኪ ንገረና እናበሉ ናብኡ ምስ ቀረቡ ብዛዕባ ኅልፈተ ዓለምን ዳግም ምጽኣቱን ዝመሃረሉ እምባ ስለዝኾነ፡ እዛ ሰንበት’ዚኣ ደብረ ዘይት ተባህለት። ኣብዛ ሰንበት’ዚኣ ዚዝመር መዝሙርን ዚንበብ መጻሕፍትን ነቲ ጐይታ ኣብ ደብረ ዘይት ዚመሃሮ ብዛዕባ ምሥጢረ ምጽኣቱን፡ ምልክታት ኅልፈተ ዓለምን ዘመልክት እዩ።
 
 ሰንበት ዘደብረ ዘይት ንዳግማይ ምጽአት ክርስቶስ ክንሰናዶ ከም ዘሎና የዘኻኽረና። አብ እምነትና ክልተ ምጽአት ክርስቶስ ከም ዘሎ ንአምን። 1ይ ኢየሱስ ክርስቶስ ሥጋና ለቢሱ ካብ ድንግል ማርያም ቅድሚ ምውላዱ ዝነበረ ጊዜ። 2ይ ክርስቶስ ድሕሪ ሞቱ ትንሣኤኡን ዕርገቱን  ብግርማ መለኮት ክመጽእ ምዃኑ እሞ ንኹሉ ብዳግም ክፈርዶ እዩ። ሎሚ ክንሓስበሉ ተደልዩ ዘሎ ዳግማይ ምጽአት ክርስቶስ እዩ። አብ ሕይወትና ሓንቲ መዓልቲ አብ ቅድሚ መንበር አምላኽ አብዛ  ምድሪ ዘሕለፍናዮ ግብሪ ክንሕተተሉ ምዃና ፈሊጥና ስንቂ  ሰማይ ክነሰናዱ ከም ዝግብአና ክንሓስብ አሎና። ክልተ ፍርዲ ይጽበየና አሎ። (2ቆሮ.5፡1-10)። 
 
 ትንቢት ዘካርያስ 14:3-7፦   "ሽዑ እግዚኣብሔር ከምቲ ብዘበን ቀደም ዝተዋግኦ፡ ነሕዛብ ኪዋጎም ኪወጽእ እዩ። በታ መዓልቲ እቲኣ ኣብ ምብራቕ ኢየሩሳሌም ኣብ ዘሎ ደብረዘይት ኪቐውም እዩ። እቲ ደብረ ዘይቲ ካብ ምብራቕ ክሳዕ ምዕራብ ኣብ ክልተ ክስንጠቕ ኣዝዩ ዓቢ ሽንጭሮ ድማ ክኸውን እዩ። ፍርቂ እቲ ከረን ናብ ሰሜን ፍርቁ ድማ ናብ ደቡብ ክሰሓብ እዩ። ሽንጭሮ  እቲ ኣኽራን ክሳዕ ኣጸል ክበጽእ እዩ እሞ ንስኻትኩም በቲ ሽንጭሮ ኣኽራነይ ክትሃድሙ ኢኹም። ኣቦታትኩም ብዘመን ኦዝያን ንጉስ ይሁዳ ካብ ምንቅጥቃጥ ምድሪ ከም ዝሃደሙ፡ ክትሃድሙ ኢኹም። እግዚኣብሔር ኣምላኽ ከኣ ምስ ኩሎም መላእኽቱ ክመጽእ እዩ….. በታ መዓልቲ እቲኣ ቁሪ ኮነ ኣሳሓይታ ኣይክህሉን እዩ።
 
  ኩሉ ግዜ ብለይቲ እውን ከይተረፈ ብርሃን ቀትሪ ክኸውን እዩ …. እዚ መዓስ ከምዝኸውን ግን እግዚኣብሔር ጥራሕ እዩ ዝፈልጦ"።
 
    እቲ ቀንዲ እቲ መጀመርያ ፍርዲ እዩ ክንሓስበሉ ዘሎና ምኽንያቱ አብ ክርስትና ሓቀኛን ቅኑዕን ሕይወት እንተ መራሕና ዝጽበየና  ፍርዲ  ናይ ክብርን ሞገስን  እዩ  ክኸውን፥ እንተኾነ  መገዲ አምላኽ ስሒትና  እንነብር እንተኾይና ፍርድና ኩነኔ እዩ ዝስዕቦ። ናይ ሎሚ ሰንበት መዝሙር  እምበአር፡  ነዚ አብ ግምት አእቲና ክንጥንቀቐሉን ክንሓስበሉን ዘሎና ነገራት ይነግረና። ኢየሱስ ዘታልሉ ብስመይ ከመጽኡኹም እዮም እሞ ከየስሕትኹም ተጠንቀቁ ኩሉ ጊዜ ተሰናዲኹም ጽንሑ ይብለና። ናይዚ ምልክት ቅድሚ ሕጂ “ብስም ክርስቶስ መጺኦም ነይሮም፡ ብሕጂ’ውን ብዝገደደ ኪመጽኡ እዮም። ብስም ክርስቶስ ትካላት እምነት ዝምሥርቱ፣ ክርስቶስ ብሕልምን ራእይን ተገሊጽለይ እናበሉ ዚመጽኡን  ዘለዉን ኣዝዮም ብዙኃን እዮም።” መስሓትቲ ብምዃኖም ድማ ንከየስሕቱና ክንጥንቀቕን ኣብ ሃይማኖትና ጸኒዕና ኽንቃወሞምን ‘ዑቍኬ ኢያስሕቱክሙ/ ከየስሕቱኹም ተጠንቀቑ’ ኢሉ የጠንቅቐና። አብ ሕይወትን፡ ክርስቲያናዊ መስመርናን  ትዕግስትን ምስትውዓልን ከም ዘድሊ ክነግረና ኢሉ ኸአ ክሳብ መወዳእታ ተዓጊሱ ዝጸንሐ  ክድሕን እዩ ይብለና።  ንዳግማይ ምጽአት ዝሕብሩ  ምልክታት ክርአዩ እዮም እሞ፡ ክነስተውዕል ይነግረና።  አብ ቅዱስ መጽሓፍ እንተተመልከትና፡  ማይ አይኂ ንኖኅ ምኽንያት ድሕነቱ ኮይንዎ፡  ነቶም ሰብ ሰዶምን ጎሞራን ግን ናይ ጥፍአቶም ምልክት ኮነ።  
 
 • “ውግእን ወረ ውግእን ክትሰምዑ ኢኹም . . . ሕዝቢ ናብ ሕዝቢ፡ መንግሥቲ‘ውን ናብ መንግሥቲ ኪለዓል እዩ” ሃገር ምስ ሃገር፣ ኣብ ውሽጢ ሃገር ነንሓድሓዱ፤ ኣብ መንጎ ሥድራን ቤተሰብን፡ ኣብ ሓደ ሰብ ሥጋን ነፍስን . . . ውግእን  ፍልልይን ዝኸፍኣሉ ዘመን ብምህላውና፡ ነቲ ትእምርቲ ምጽኣቱ ብሩህ ይገብሮ።
 
 • “ኣብ በቦታኡ ድማ ጥሜትን ፌራን  ምንቅጥቃጥ ምድርን ኪኸውን እዩ . . . ” ብተፈጥሮን ሰብ ብዝሠርሖን ሕልቂት ሕዝቢ፤ ምንቅጥቃጥ ምድሪ ብዝኸፍአ ሳዕቤን፡ ብዝቐልጠፈ ተርእዮን ሎሚ ዓለም ተናዊጻ ምህላዋ ርዱእ ትእምርቲ ምጽኣቱ እዩ። ምዕቡል ዘመን ኣብ ዝተባህለሉ ጊዜ ክብሪ እኽለ ማይን፡ ድርቅን ጥሜትን ዓጸቦን ዝገደደሉ ጊዜ እዩ። ካብዚ ዝገደደ ግና ረኃብ ነፍሲ፡ ጥሜት እንጌራን ጽምኢ ማይን ዘይኮነስ፡ ረኃብ ቃለ እግዚአብሔር ምህላዉ እዩ። ሰብ ሃይማኖቱ ኃዲጉ፡ ንዓውለማ ዝተገዝኣሉ፡ ዝያዳ ቃል እግዚኣብሔር ኣድህቦን ኣድናቖትን ዝህቦ ንስፖርተኛታት፡ ደርፍቲ፡ ተዋሳእቲ . . . ወዘይመስሎ ብምህላዉ እቲ ጊዜ ምቕራቡ ዘረድእ እዩ።
 
 ቅዱስ ጴጥሮስ “ግና መወዳእታ ዅሉ ነገር ቀሪቡ እዩ፡ ስለዚ ርእስኹም ግትኡ ንጸሎት’ውን ንቕሑ” (1ይ.ጴጥ.4፡7) እናተባህለ ንሕና ግና ነቲ “ንቕሑ” ዝብል ቃል ዝዘንጋዕናዮ ንመስል። እሞ እንተኾነ እቲ ክኾኖ ዘሎዎ እቲ ዓጊትዎ ዘሎ ካብ መገዱ ክሳዕ ዘልግስ ኣይክኸውንን እዩ፡ ሽዑ እቲ ሕጊ ዘይብሉ ክግለጽ እዩ ጎይታ ኢየሱስ ከኣ በቲንካብ ኣፉ ዝወጽእ ትንፋስ ከጥፍኦ እዩ…. ብግርማ  ምጽኣቱ  ከኣ ክድምስሶ እዩ። ናይቲ ሕጊ ዘይብሉ ምምጻእ፡  በቲ ሰይጣን ዝዓዮ ዘሎ ኩሉ ናይ ሓይልን ሓሳዊ ትእምርትን ተኣምራትን ዝተሰነየ ክኸውን እዩ ነቶም ዝጠፍኡ ዘስሕተሉ ተንኮልን ክፍኣትን ኣሎዎ …እቶም ዝጠፍኡ ከኣ ነቲን ከድሕኖም ዝኽእል ሓቂ ብፍቕሪ ምቕባኣል ስለዝኣበዩ እዩ ”(2ተሰ.2፡ 7-10)።
 
 

 
   ወስብሐት ለእግዚኣብሔር!!!
 ኣባ ዮናስ ዮሓንስ

</p>
              </div>
              
              <div className='justify-items-center h-96 py-12'>
              <h1 className=' text-gray-950  font-extrabold text-3xl'>ናይ ማዓልቱ ስብከት</h1>
              

                <div className='flex justify-evenly'>
                <p className=' text-black font-medium text-xl bg-gray-50 rounded-2xl  py-8 mt-5 px-20'>ዕለት ፈረንጂ <br />ሮቡዕ<br />02-04-2025
                </p>
                
                
                <div className='bg-gray-50 rounded-2xl mt-5 p-12'>
                <p className='text-black  font-bold text-2xl '>ምስማክ</p>
                <p className=' text-black font-medium text-xl '>ወተንሥአ እግዚብሔር ከም ዘንቃሕ 
                    እምንዋም፣<br />
                    ወከመ ኃያል ወኅዳገ ወይን፣<br />
                    ወቀተለ ጸሮ በድኅሬሁ።<br />
                    (መዝ 77፡65-66)
                    </p>
                    </div>
                <p className=' text-black font-medium text-xl bg-slate-50 rounded-2xl  py-8 mt-5 px-20'>ዕለት ግእዝ<br />ሮቡዕ<br />02-04-2018
                    </p>
                    </div>

              </div>
              

              </div>
              

</div>

  
    </div>


    </div>

    </>
  )
}

export default Home