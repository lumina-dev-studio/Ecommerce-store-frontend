import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MediumCard = ({data}:any) => {
  return (
    <div>
      <Card
         
          className="bg-white shadow-none grid grid-cols-1  xl:grid-cols-2 border-none items-center p-2 rounded-lg transition"
        >
          
      
            <div className="  ">
              <img
                src={data?.image}
                alt={data?.title}
             
                className="w-[200px] h-[200px] object-contain"
              />
            </div>
           
          
          
          <div>
       
            
         
            <CardContent className=" mt-5">

                <h3 className=" text-[15px] font-[600] my-3 text-center xl:text-start uppercase ">  {data?.title}</h3>
            <ul className="space-y-3 text-[14px] text-center xl:text-start text-gray-500">
              {data?.items.map((item:any, i:any) => (
                <li key={i} className="hover:text-gray-800 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
          </div>
        
        </Card>
    </div>
  );
};

export default MediumCard;