export interface League {
    name: string,
    relegated?: {
        amount?: number[],
        qualifyersAmount?: number[]
    },
    continental?: {
        continentalFirstDivision?: {
            amount: number[],
            name: string,
        },
        continentalSecondDivision?: {
            amount: number[],
            name: string,
        },
        continentalThirdDivision?: {
            amount: number[],
            name: string,
        },
        continentalQualyfiers?: {
            amount: number[],
            name: string,
        }
    }
}