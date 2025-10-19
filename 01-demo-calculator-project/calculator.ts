type InvestmentData = {
  initialAmount: number
  annualContribution: number
  expectedReturn: number
  duration: number
}

type InvestmentResult = {
  year: string
  totalAmount: number
  totalContributions: number
  totalInterestEarned: number
}

type CalculationResult = InvestmentResult[] | string

function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data

  if (initialAmount < 0) {
    return 'Initial amount should be at least zero.'
  }
  if (duration <= 0) {
    return 'No valid amount of years provided.'
  }
  if (expectedReturn < 0) {
    return 'Expected return must be at least zero.'
  }

  let total = initialAmount
  let totalContributions = 0
  let totalInterestEarned = 0

  const annualResults: InvestmentResult[] = []

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn)
    totalInterestEarned = total - totalContributions - initialAmount
    totalContributions = totalContributions + annualContribution
    total = total + annualContribution

    annualResults.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalInterestEarned,
      totalContributions,
    })
  }

  return annualResults
}

function printResults(results: CalculationResult) {
  if (typeof results === 'string') {
    console.log(results)
    return
  }

  for (const yearOfResult of results) {
    console.log(yearOfResult.year)
    console.log(`Total: ${yearOfResult.totalAmount.toFixed(0)}`)
    console.log(`Total contributions: ${yearOfResult.totalContributions.toFixed(0)}`)
    console.log(`Total interest: ${yearOfResult.totalInterestEarned.toFixed(0)}`)
    console.log('---------------------------')
  }
}

const data: InvestmentData = {
  initialAmount: 5000,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 3
}
const dataError: InvestmentData = {
  initialAmount: -1,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 3
}

const results = calculateInvestment(data)
printResults(results)
console.log('---====---')
const resultsWithError = calculateInvestment(dataError)
printResults(resultsWithError)
