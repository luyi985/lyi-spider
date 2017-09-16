global.config = {
	test: {
		url: (brrowAmmount=774000) => `http://www.ratecity.com.au/home-loans/compare?h_bank=true&h_flexibilityScore=23&h_maxBorrowingAmount=${brrowAmmount}&h_minDeposit=26&h_nswApplicable=true&h_ownerOccupied=true&h_per_page=2000&h_principalAndInterest=true&h_propertyValue=1000000&ab_test_id=0.52`,
		selector: ".rate-table.table.table-hover tr.product"
	}
}