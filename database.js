const fs = require('fs')

const users_data = [
  { id: 0, username: 'user_bnalhlaq', password: 'nwng' },      
  { id: 1, username: 'user_qosevwnk', password: 'iash' },      
  { id: 2, username: 'user_smhvesck', password: 'blhc' },      
  { id: 3, username: 'user_sdhlvuww', password: 'nksq' },      
  { id: 4, username: 'user_edsbeqcq', password: 'iaib' },      
  { id: 5, username: 'user_iweccinb', password: 'fvew' },      
  { id: 6, username: 'user_whwabcvi', password: 'vhvl' },      
  { id: 7, username: 'user_vbeqqcnb', password: 'niwh' },      
  { id: 8, username: 'user_valwvwgk', password: 'hahy' },      
  { id: 9, username: 'user_iwknungh', password: 'bgig' },
]

const promos_data = [
  {
    promo: 'promo_egnhnchvvn',
    date: { start: 1618174800, end: 1621803600 },
    use_count: 8,
    creator: 5
  },
  {
    promo: 'promo_oclneafbbi',
    date: { start: 1625432400, end: 1629061200 },
    use_count: 2,
    creator: 3
  },
  {
    promo: 'promo_ievnqbeakw',
    date: { start: 1614459600, end: 1618088400 },
    use_count: 8,
    creator: 6
  },
  {
    promo: 'promo_luvgadnilf',
    date: { start: 1627160400, end: 1630789200 },
    use_count: 3,
    creator: 9
  },
  {
    promo: 'promo_hvlwbghqnc',
    date: { start: 1625259600, end: 1628888400 },
    use_count: 10,
    creator: 8
  },
  {
    promo: 'promo_lbfchbwakv',
    date: { start: 1639515600, end: 1643144400 },
    use_count: 6,
    creator: 5
  },
  {
    promo: 'promo_wilidoncwv',
    date: { start: 1613941200, end: 1617570000 },
    use_count: 7,
    creator: 6
  },
  {
    promo: 'promo_fawahkvghh',
    date: { start: 1636146000, end: 1639774800 },
    use_count: 9,
    creator: 4
  },
  {
    promo: 'promo_kqlcuabvbg',
    date: { start: 1632171600, end: 1635800400 },
    use_count: 3,
    creator: 2
  },
  {
    promo: 'promo_dadhlicivl',
    date: { start: 1621026000, end: 1624654800 },
    use_count: 8,
    creator: 0
  },
  {
    promo: 'promo_dncwbqodlm',
    date: { start: 1618261200, end: 1621890000 },
    use_count: 5,
    creator: 9
  },
  {
    promo: 'promo_svicfbevvf',
    date: { start: 1621890000, end: 1625518800 },
    use_count: 6,
    creator: 0
  },
  {
    promo: 'promo_iiwgbhvavn',
    date: { start: 1629320400, end: 1632949200 },
    use_count: 7,
    creator: 7
  },
  {
    promo: 'promo_ubnavhsnqi',
    date: { start: 1626728400, end: 1630357200 },
    use_count: 9,
    creator: 2
  },
  {
    promo: 'promo_ivhhnhigec',
    date: { start: 1613422800, end: 1617051600 },
    use_count: 0,
    creator: 6
  },
  {
    promo: 'promo_liflbifubv',
    date: { start: 1610658000, end: 1614286800 },
    use_count: 2,
    creator: 5
  },
  {
    promo: 'promo_vakngnnvsw',
    date: { start: 1624827600, end: 1628456400 },
    use_count: 6,
    creator: 7
  },
  {
    promo: 'promo_svdblnbaas',
    date: { start: 1616187600, end: 1619816400 },
    use_count: 9,
    creator: 5
  },
  {
    promo: 'promo_anvcegaevl',
    date: { start: 1619211600, end: 1622840400 },
    use_count: 0,
    creator: 8
  },
  {
    promo: 'promo_fhakynueve',
    date: { start: 1632258000, end: 1635886800 },
    use_count: 0,
    creator: 2
  },
  {
    promo: 'promo_hgmcqyhvev',
    date: { start: 1610917200, end: 1614546000 },
    use_count: 5,
    creator: 0
  },
  {
    promo: 'promo_kvidkgbwwf',
    date: { start: 1614718800, end: 1618347600 },
    use_count: 1,
    creator: 1
  },
  {
    promo: 'promo_bvviknobqv',
    date: { start: 1638910800, end: 1642539600 },
    use_count: 1,
    creator: 2
  },
  {
    promo: 'promo_bnvmvgdbbn',
    date: { start: 1629320400, end: 1632949200 },
    use_count: 6,
    creator: 9
  },
  {
    promo: 'promo_svvvliasue',
    date: { start: 1609534800, end: 1613163600 },
    use_count: 9,
    creator: 4
  },
  {
    promo: 'promo_dgbbwicclh',
    date: { start: 1623790800, end: 1627419600 },
    use_count: 7,
    creator: 3
  },
  {
    promo: 'promo_vvvckgdvms',
    date: { start: 1632085200, end: 1635714000 },
    use_count: 0,
    creator: 1
  },
  {
    promo: 'promo_lheeluqcfm',
    date: { start: 1625518800, end: 1629147600 },
    use_count: 0,
    creator: 3
  },
  {
    promo: 'promo_ysqldwuhcv',
    date: { start: 1623531600, end: 1627160400 },
    use_count: 3,
    creator: 8
  },
  {
    promo: 'promo_bouvvelicb',
    date: { start: 1612904400, end: 1616533200 },
    use_count: 10,
    creator: 0
  },
  {
    promo: 'promo_lliswsngge',
    date: { start: 1623013200, end: 1626642000 },
    use_count: 7,
    creator: 6
  },
  {
    promo: 'promo_nivcuohqmg',
    date: { start: 1622581200, end: 1626210000 },
    use_count: 7,
    creator: 7
  },
  {
    promo: 'promo_vvhccwfaql',
    date: { start: 1613941200, end: 1617570000 },
    use_count: 7,
    creator: 1
  },
  {
    promo: 'promo_nvghlhyvbw',
    date: { start: 1626037200, end: 1629666000 },
    use_count: 10,
    creator: 0
  },
  {
    promo: 'promo_nwhhwfcvvg',
    date: { start: 1625086800, end: 1628715600 },
    use_count: 4,
    creator: 3
  },
  {
    promo: 'promo_vesyvvdnhv',
    date: { start: 1613509200, end: 1617138000 },
    use_count: 8,
    creator: 3
  },
  {
    promo: 'promo_nbwvwvdwie',
    date: { start: 1636146000, end: 1639774800 },
    use_count: 9,
    creator: 8
  },
  {
    promo: 'promo_hqgqgfnbbc',
    date: { start: 1621890000, end: 1625518800 },
    use_count: 0,
    creator: 5
  },
  {
    promo: 'promo_ivqnvadkwe',
    date: { start: 1640466000, end: 1644094800 },
    use_count: 8,
    creator: 1
  },
  {
    promo: 'promo_bidsdvegig',
    date: { start: 1622149200, end: 1625778000 },
    use_count: 3,
    creator: 7
  },
  {
    promo: 'promo_qhhcldiiba',
    date: { start: 1634677200, end: 1638306000 },
    use_count: 1,
    creator: 2
  },
  {
    promo: 'promo_lenvlednce',
    date: { start: 1636750800, end: 1640379600 },
    use_count: 10,
    creator: 1
  },
  {
    promo: 'promo_gonelsscbn',
    date: { start: 1626296400, end: 1629925200 },
    use_count: 5,
    creator: 7
  },
  {
    promo: 'promo_bcovkbehuc',
    date: { start: 1637096400, end: 1640725200 },
    use_count: 0,
    creator: 7
  },
  {
    promo: 'promo_dvchivmebs',
    date: { start: 1630011600, end: 1633640400 },
    use_count: 10,
    creator: 8
  },
  {
    promo: 'promo_vogmvybmcy',
    date: { start: 1622062800, end: 1625691600 },
    use_count: 1,
    creator: 1
  },
  {
    promo: 'promo_gbnhldbqmm',
    date: { start: 1620766800, end: 1624395600 },
    use_count: 9,
    creator: 8
  },
  {
    promo: 'promo_eiweflwwca',
    date: { start: 1623531600, end: 1627160400 },
    use_count: 0,
    creator: 8
  },
  {
    promo: 'promo_avnuoqvamv',
    date: { start: 1629320400, end: 1632949200 },
    use_count: 10,
    creator: 4
  },
  {
    promo: 'promo_llhsoiwalm',
    date: { start: 1614632400, end: 1618261200 },
    use_count: 6,
    creator: 2
  },
  {
    promo: 'promo_acyvvevabn',
    date: { start: 1624050000, end: 1627678800 },
    use_count: 9,
    creator: 9
  },
  {
    promo: 'promo_idkvlgeouu',
    date: { start: 1628974800, end: 1632603600 },
    use_count: 7,
    creator: 6
  },
  {
    promo: 'promo_acvvhilbwb',
    date: { start: 1638910800, end: 1642539600 },
    use_count: 3,
    creator: 0
  },
  {
    promo: 'promo_ncgendeneh',
    date: { start: 1613509200, end: 1617138000 },
    use_count: 2,
    creator: 4
  },
  {
    promo: 'promo_eavsvffflv',
    date: { start: 1628542800, end: 1632171600 },
    use_count: 6,
    creator: 2
  },
  {
    promo: 'promo_fhgwfwwmab',
    date: { start: 1612299600, end: 1615928400 },
    use_count: 1,
    creator: 5
  },
  {
    promo: 'promo_mwmchvibse',
    date: { start: 1631221200, end: 1634850000 },
    use_count: 1,
    creator: 2
  },
  {
    promo: 'promo_vlyywybvvg',
    date: { start: 1610226000, end: 1613854800 },
    use_count: 5,
    creator: 2
  },
  {
    promo: 'promo_elwalenyww',
    date: { start: 1632085200, end: 1635714000 },
    use_count: 10,
    creator: 1
  },
  {
    promo: 'promo_ulibhkssae',
    date: { start: 1640466000, end: 1644094800 },
    use_count: 1,
    creator: 4
  },
  {
    promo: 'promo_khcnnnqbys',
    date: { start: 1626901200, end: 1630530000 },
    use_count: 5,
    creator: 7
  },
  {
    promo: 'promo_auhlnvelgq',
    date: { start: 1611694800, end: 1615323600 },
    use_count: 0,
    creator: 4
  },
  {
    promo: 'promo_hnwvvhhsvi',
    date: { start: 1616533200, end: 1620162000 },
    use_count: 8,
    creator: 2
  },
  {
    promo: 'promo_gekbagnced',
    date: { start: 1630443600, end: 1634072400 },
    use_count: 3,
    creator: 3
  },
  {
    promo: 'promo_vlwbdceuwo',
    date: { start: 1628629200, end: 1632258000 },
    use_count: 0,
    creator: 4
  },
  {
    promo: 'promo_qnfenbmcmg',
    date: { start: 1612645200, end: 1616274000 },
    use_count: 3,
    creator: 2
  },
  {
    promo: 'promo_alhgnhqfnb',
    date: { start: 1627160400, end: 1630789200 },
    use_count: 10,
    creator: 7
  },
  {
    promo: 'promo_gdlgvcebcm',
    date: { start: 1634936400, end: 1638565200 },
    use_count: 7,
    creator: 7
  },
  {
    promo: 'promo_yhgcywbogi',
    date: { start: 1614114000, end: 1617742800 },
    use_count: 2,
    creator: 7
  },
  {
    promo: 'promo_vwqnavueyh',
    date: { start: 1617570000, end: 1621198800 },
    use_count: 3,
    creator: 1
  },
  {
    promo: 'promo_lebblvhnna',
    date: { start: 1626469200, end: 1630098000 },
    use_count: 4,
    creator: 8
  },
  {
    promo: 'promo_ildwimevne',
    date: { start: 1620421200, end: 1624050000 },
    use_count: 3,
    creator: 5
  },
  {
    promo: 'promo_ehebnekoeu',
    date: { start: 1636750800, end: 1640379600 },
    use_count: 7,
    creator: 0
  },
  {
    promo: 'promo_clbcinvbka',
    date: { start: 1636146000, end: 1639774800 },
    use_count: 0,
    creator: 1
  },
  {
    promo: 'promo_gesmncnavs',
    date: { start: 1610744400, end: 1614373200 },
    use_count: 8,
    creator: 1
  },
  {
    promo: 'promo_cwleflhhsn',
    date: { start: 1639083600, end: 1642712400 },
    use_count: 7,
    creator: 3
  },
  {
    promo: 'promo_nwcckbovwb',
    date: { start: 1621544400, end: 1625173200 },
    use_count: 7,
    creator: 9
  },
  {
    promo: 'promo_skibsagwwq',
    date: { start: 1611003600, end: 1614632400 },
    use_count: 1,
    creator: 9
  },
  {
    promo: 'promo_voceginwsh',
    date: { start: 1631566800, end: 1635195600 },
    use_count: 8,
    creator: 3
  },
  {
    promo: 'promo_lglvivueyw',
    date: { start: 1628197200, end: 1631826000 },
    use_count: 7,
    creator: 6
  },
  {
    promo: 'promo_ioiwnaefyl',
    date: { start: 1629320400, end: 1632949200 },
    use_count: 5,
    creator: 8
  },
  {
    promo: 'promo_hwsvvecndb',
    date: { start: 1623272400, end: 1626901200 },
    use_count: 6,
    creator: 9
  },
  {
    promo: 'promo_livyclhghk',
    date: { start: 1620334800, end: 1623963600 },
    use_count: 1,
    creator: 7
  },
  {
    promo: 'promo_ggwiacnnbs',
    date: { start: 1625518800, end: 1629147600 },
    use_count: 6,
    creator: 1
  },
  {
    promo: 'promo_vivilihwdl',
    date: { start: 1631048400, end: 1634677200 },
    use_count: 0,
    creator: 4
  },
  {
    promo: 'promo_vqqmvkdlvb',
    date: { start: 1620248400, end: 1623877200 },
    use_count: 0,
    creator: 0
  },
  {
    promo: 'promo_iubekkvson',
    date: { start: 1626296400, end: 1629925200 },
    use_count: 3,
    creator: 0
  },
  {
    promo: 'promo_cagknwvwan',
    date: { start: 1625605200, end: 1629234000 },
    use_count: 6,
    creator: 7
  },
  {
    promo: 'promo_avbnhlhhml',
    date: { start: 1626901200, end: 1630530000 },
    use_count: 6,
    creator: 5
  },
  {
    promo: 'promo_gacfngfvse',
    date: { start: 1633640400, end: 1637269200 },
    use_count: 2,
    creator: 6
  },
  {
    promo: 'promo_bsaqakcnud',
    date: { start: 1616360400, end: 1619989200 },
    use_count: 7,
    creator: 1
  },
  {
    promo: 'promo_cbkbdwansv',
    date: { start: 1638738000, end: 1642366800 },
    use_count: 1,
    creator: 9
  },
  {
    promo: 'promo_dkllgbwyuy',
    date: { start: 1618952400, end: 1622581200 },
    use_count: 8,
    creator: 3
  },
  {
    promo: 'promo_hvsbeewyvn',
    date: { start: 1610312400, end: 1613941200 },
    use_count: 7,
    creator: 6
  },
  {
    promo: 'promo_bnadwcbnho',
    date: { start: 1625432400, end: 1629061200 },
    use_count: 9,
    creator: 7
  },
  {
    promo: 'promo_hnfdbnebaq',
    date: { start: 1638651600, end: 1642280400 },
    use_count: 1,
    creator: 0
  },
  {
    promo: 'promo_cnfuybuiaq',
    date: { start: 1634072400, end: 1637701200 },
    use_count: 2,
    creator: 9
  },
  {
    promo: 'promo_hvvuvbfvsh',
    date: { start: 1623963600, end: 1627592400 },
    use_count: 8,
    creator: 6
  },
  {
    promo: 'promo_nlgaycaslc',
    date: { start: 1624568400, end: 1628197200 },
    use_count: 9,
    creator: 2
  },
  {
    promo: 'promo_nhyvsekvym',
    date: { start: 1625432400, end: 1629061200 },
    use_count: 6,
    creator: 1
  }
]

const database = {
  users: users_data,
  promos: promos_data.map((promo, id) => { return {
    id,
    ...promo
  }})
}

fs.writeFile('db.json', JSON.stringify(database), (err) => {
  if (err) throw err
  console.log('Data written to file')
})
