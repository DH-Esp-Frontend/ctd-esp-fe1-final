export const getEpisode = async (capitulo:string) => {
    return await fetch(
      capitulo
    ).then((data) => data.json());
  };