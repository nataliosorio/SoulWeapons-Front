export interface Player {
  id: number;
  name: string;
}

export interface Carta {
id : number;
name : string;
Code : string;
image : string;
damage : number;
fireDamage : number;
electricDamage : number;
crtiticalDamage : number;
poisionDamage : number;
magicDamage : number;
Asset : boolean;
IsDeleted : boolean;
}

export interface PlayersSelectedCardsDto {
  playerId: number;
  selectedCardId: number;
}

export interface CardComparisonDto {
  absoluteWinnerId?: number;
  roomId?: number;
  attributeComparison: string;
  winnerRoundId?: number;
  winnerCardId?: number;
  playersSelectedCards?: PlayersSelectedCardsDto[];
}
