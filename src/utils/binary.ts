export const findBinaryNumberOfGaps = (binary: string): number => {
  let maxNumberOfGaps = 0;
  let currentNumberOfGaps = 0;
  let counting = false;

  for(let i = 0; i < binary.length; i++){
    if(binary[i] === '1'){
      if(counting){
        maxNumberOfGaps = Math.max(maxNumberOfGaps, currentNumberOfGaps);
      }
      counting = true;
      currentNumberOfGaps = 0;
      continue;
    }

    if(counting){
      currentNumberOfGaps++;
    }
  }

  return maxNumberOfGaps;
}