
const FacetCutAction = {
  Add: 0,
  Replace: 1,
  Remove: 2
}

function getSelectors(contract) {
  const selectors = contract.abi.reduce((acc, val) => {
    if (val.type === 'function') {
      acc.push(val.signature)
      return acc
    } else {
      return acc
    }
  }, [])
  return selectors
}

function removeItem(array, item) {
  array.splice(array.indexOf(item), 1)
  return array
}

function findPositionInFacets(facetAddress, facets) {
  for (let i = 0; i < facets.length; i++) {
    if (facets[i].facetAddress === facetAddress) {
      return i
    }
  }
}