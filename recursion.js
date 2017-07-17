const categories = [
  { name: 'tech', parent: null },
  { name: 'hot_right_now', parent: 'tech' },
  { name: 'upcomming_releases', parent: 'tech' },
  { name: 'gadgets', parent: 'tech' },
  { name: 'news', parent: null },
  { name: 'social', parent: 'startups' },
  { name: 'europe', parent: 'news' },
  { name: 'asia', parent: 'news' },
  { name: 'events', parent: 'news' },
  { name: 'startups', parent: null },
  { name: 'funding', parent: 'startups' },
  { name: 'unicorns', parent: 'startups' },
  { name: 'venture_capital', parent: 'funding' },
  { name: 'crowdfunding', parent: 'funding' },
  { name: 'usa', parent: 'news' }
]

function recursion (categories, parent = null) {
  let list = {}

  categories.filter(c => c.parent === parent)
    .forEach(c => {
      list[c.name] = recursion(categories, c.name)
    })

  return list
}

const list = recursion(categories)
console.log(JSON.stringify(list, null, 2))
