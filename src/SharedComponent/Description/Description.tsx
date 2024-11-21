'use client'
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";


const Description = () => {
 const [show,setShow]=useState(false)

  return (
    <Card className="bg-white px-6 py-8  rounded-xl shadow-sm w-full  my-20">
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
        Online store of household appliances and electronics
      </h2>
      
      <p className="text-gray-600 mb-4">
        Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s too big for the boot? Or too small? Too short sentences, too many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.
      </p>
      
      {show && <p className="text-gray-600 mb-6">
        A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or she can’t quite put a finger on it is worse. Chances are there wasn’t collaboration, communication, and checkpoints, there wasn’t a process agreed upon or specified with the granularity required. It’s content strategy gone awry right from the start. If that’s what you think, how about the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.
      </p>}

      <button onClick={()=> setShow(!show)} className="bg-gray-200/60 text-[13px] text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition duration-200 flex gap-2 items-center">
        Read More <FaAngleDown />

      </button>
    </Card>
  );
};

export default Description;
