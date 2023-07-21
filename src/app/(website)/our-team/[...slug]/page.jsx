import { notFound } from "next/navigation";
import Panel from "../components/panel";

export default function Page({ params }) {
  console.log(params.slug);
  if(params.slug[2])
    return notFound();
  else if(Number(params.slug[0])>2023 || Number(params.slug[0])<2012)
    return notFound();
  else if(params.slug[1]){
    switch(params.slug[1]){
      case "executive-committee":
        return <><h1>{params.slug[0]} {params.slug[1]}</h1></>
      case "volunteers":
        return <><h1>{params.slug[0]} {params.slug[1]}</h1></>
      case "cs-executive-committee":
        return <><h1>{params.slug[0]} {params.slug[1]}</h1></>
      case "ias-executive-committee":
        return <><h1>{params.slug[0]} {params.slug[1]}</h1></>
      case "mtts-executive-committee":
        return <><h1>{params.slug[0]} {params.slug[1]}</h1></>
      case "embs-executive-committee":
        return <><h1>{params.slug[0]} {params.slug[1]}</h1></>
      case "wie-executive-committee":
        return <><h1>{params.slug[0]} {params.slug[1]}</h1></>
      default:
        return notFound();
    }
  }
  else if(params.slug[0])
    return <Panel year={params.slug[0]} />
}
