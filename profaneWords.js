const profaneWords = [
  '@rsehol', '@unt', 'a-ss', 'a.rse', 'a.s.s', 'a55', 'a55hole', 'a_s_s', 'acrotomophilia', 'ahole', 'ama10', 'anal', 'analprobe', 'anilingus', 'anul', 'anus', 'apeshit', 'ar5e', 'ar5h0le', 'ar5h0les', 'arrse', 'ars3', 'arse', 'arseh0le', 'arseh0les', 'arseho', 'arsehol', 'arsehole', 'arseholes', 'arsewipe', 'arsh0le', 'arshole', 'arsholes', 'aryan', 'as-s', 'asdf', 'ashole', 'ass', 'ass hole', 'ass-fucker', 'ass.', 'assbang', 'assbanged', 'assbangs', 'asses', 'assfuck', 'assfucker', 'assfukka', 'assh0le', 'assh0les', 'asshat', 'assho1e', 'asshole', 'assholecleaner', 'assholes', 'asskisser', 'asslick', 'asslicker', 'assmaster', 'assmunch', 'asswhole', 'asswipe', 'asswipes', 'autizmz', 'auto erotic', 'autoerotic', 'azazel', 'azz', 'b!tch', 'babeland', 'baby batter', 'ball gag', 'ball gravy', 'ball kicking', 'ball licking', 'ball sack', 'ball sucking', 'ballbag', 'ballsack', 'banchoot', 'bangbros', 'banger', 'barely legal', 'barenaked', 'barf', 'bast', 'bastard', 'bastardo', 'bastards', 'basterd', 'bastinado', 'basyard', 'basyards', 'battyboy', 'bawdy', 'bbw', 'bdsm', 'beaner', 'beardedclam', 'beastial', 'beastiality', 'beatch', 'beaver cleaver', 'beaver lips', 'beeeeutch', 'beefcurtains', 'beeyotch', 'belend', 'bellend', 'beotch', 'bestial', 'bestiality', 'biatch', 'bich', 'biener', 'big black', 'big breasts', 'big knockers', 'big tits', 'bigtits', 'biitch', 'bimbo', 'bimbos', 'bindippers', 'birdlock', 'bitch', 'bitched', 'bitcher', 'bitchers', 'bitches', 'bitchin', 'bitching', 'bitchy', 'bitty', 'biyatch', 'black animals', 'black cock', 'blonde action', 'blonde on blonde action', 'bloody', 'blow job', 'blow j', 'blow job', 'blow-job', 'blowher', 'blowhim', 'blowjob', 'blowjobs', 'blowme', 'blue waffle', 'blumpkin', 'bo11ocks', 'boabiesooking', 'boabysooking', 'bod', 'bodily', 'boink', 'boiolas', 'boll0cks', 'bollock', 'bollocks', 'bollok', 'bollox', 'bolocks', 'bolox', 'bondage', 'boned', 'bonehead', 'boner', 'boners', 'bong', 'bonk', 'boob', 'boobies', 'boobs', 'booby', 'booger', 'boogers', 'bookie', 'booobs', 'boooobs', 'booooobs', 'booooooobs', 'bootee', 'bootha', 'boothas', 'bootie', 'booty', 'booty call', 'booze', 'boozer', 'boozy', 'bosedeeke', 'bosom', 'bosomy', 'bowels', 'bozi', 'breasts', 'brown showers', 'browneye', 'browntown', 'brunette action', 'buceta', 'bucketcunt', 'bufu', 'bugger', 'bugger off', 'bukkake', 'bull shit', 'bulldager', 'bulldyke', 'bullet vibe', 'bullhell', 'bullshit', 'bullshits', 'bullshitted', 'bullturds', 'bum', 'bumbandit', 'bumhole', 'bung', 'bung hole', 'bunghole', 'bunny fucker', 'bunnyfucker', 'busty', 'butch', 'butt', 'butt fuck', 'buttbreath', 'buttcheeks', 'buttface', 'buttfuck', 'buttfucker', 'butthair', 'butthead', 'butthole', 'buttholesweat', 'buttmuch', 'buttmunch', 'buttpicker', 'buttplug', 'c#nt', 'c-0-c-k', 'c-o-c-k', 'c-u-n-t', 'c.0.c.k', 'c.o.c.k.', 'c.u.n.t', 'c.unt', 'c00n', 'c0ck', 'c0cksucka', 'c0cksucker', 'c_u_n_t', 'caca', 'cahnt', 'cahnts', 'cahone', 'callgirl', 'camel toe', 'cameltoe', 'camgirl', 'camslut', 'camwhore', 'candy-ass', 'carpet muncher', 'carpetmuncher', 'catshit', 'cawk', 'cayenne', 'cayennetech', 'chav', 'cheesyass', 'chinc', 'chinchin', 'chincs', 'chink', 'chode', 'chodes', 'chowhai', 'chuffnuts', 'chutiya', 'cialis', 'cipa', 'circle jerk', 'circlejerk', 'cl1t', 'clam', 'clench', 'clit', 'clitoff', 'cliton', 'clitoris', 'clitorus', 'clits', 'clitty', 'clover clamps', 'clunge', 'clusterfuck', 'cnut', 'cnuts', 'cobia', 'cocain', 'cock', 'cock sucker', 'cock-sucker', 'cockblock', 'cockblocker', 'cockface', 'cockhead', 'cockholster', 'cockknocker', 'cockmunch', 'cockmuncher', 'cocks', 'cocksmoker', 'cocksuck', 'cocksucka', 'cocksucked', 'cocksucker', 'cocksuckers', 'cocksucking', 'cocksucks', 'cocksuka', 'cocksukka', 'coital', 'cojones', 'cok', 'cokmuncher', 'coksucka', 'commie', 'cooch', 'coochie', 'coon', 'coons', 'cooter', 'coprolagnia', 'coprophilia', 'copulate', 'corksucker', 'cornhole', 'cornholed', 'cossorali', 'cox', 'cracker', 'crackwhore', 'crap', 'crappy', 'creampie', 'cretin', 'cripple', 'critest', 'crustycrotch', 'cuck', 'cucked', 'cuckhold', 'cuckold', 'cucks', 'cum', 'cummer', 'cummin', 'cumming', 'cumn', 'cumquat', 'cums', 'cumshot', 'cumshots', 'cumslut', 'cumstain', 'cun$', 'cunilingus', 'cunillingus', 'cunnilingus', 'cunny', 'cunt', 'cunt\'s', 'cunt.', 'cuntbreath', 'cuntdog', 'cuntface', 'cunthunter', 'cunting', 'cuntlick', 'cuntlicker', 'cuntlicking', 'cuntlip', 'cunton', 'cunts', 'cuntsucker', 'cuunt', 'cvnt', 'cvnts', 'cyalis', 'cyberfuc', 'cyberfuck', 'cyberfucked', 'cyberfucker', 'cyberfuckers', 'cyberfucking', 'd-ick', 'd-ong', 'd.i.c.k', 'd0ng', 'd0uch3', 'd0uche', 'd1ck', 'd1ck!', 'd1ckh@ed', 'd1ld0', 'd1ldo', 'daggummit', 'dago', 'dagos', 'dammit', 'damn', 'damned', 'damnit', 'damnmit', 'darkie', 'darky', 'darnit', 'date rape', 'daterape', 'dawgie-style', 'dbqkd', 'dck', 'deeepthroat', 'deep throat', 'deepthroat', 'dendrophilia', 'dick', 'dick-ish', 'dickbag', 'dickbrain', 'dickbreath', 'dickcheese', 'dickdipper', 'dickface', 'dickflipper', 'dickhead', 'dickheads', 'dickish', 'dickless', 'dickripper', 'dicks', 'dicksipper', 'dicksmack', 'dicksucker', 'dickweed', 'dickwhipper', 'dickwrinkle', 'dickzipper', 'diddle', 'diehd', 'dike', 'dil.do', 'dildo', 'dildos', 'diligaf', 'dilldoe', 'dilldos', 'dillweed', 'dimwit', 'dingle', 'dink', 'dinks', 'dipship', 'dipshit', 'dipstick', 'dirsa', 'dirty pillows', 'dirty sanchez', 'dlck', 'do-ong', 'dobber', 'dog style', 'dog-fucker', 'doggie style', 'doggie-style', 'doggiestyle', 'doggin', 'dogging', 'doggy style', 'doggy-style', 'doggystyle', 'dolcett', 'dominatrix', 'dommes', 'dong', 'donkey punch', 'donkeypunch', 'donkeyribber', 'doofus', 'doosh', 'dopey', 'dork', 'double dong', 'double penetration', 'douch3', 'douche', 'douchebag', 'douchebags', 'douchejuice', 'douchenozzle', 'douchenugget', 'douchey', 'duche', 'dumass', 'dumbass', 'dumbasses', 'dumbfuck', 'dumbfucker', 'dumbo', 'dummy', 'dung', 'dxxkhead', 'dyke', 'dykes', 'eat my ass', 'ecchi', 'eff', 'effin', 'ejaculate', 'ejaculated', 'ejaculates', 'ejaculating', 'ejaculatings', 'ejaculation', 'ejakulate', 'essohbee', 'ethical slut', 'eunuch', 'extacy', 'extasy', 'f u c k', 'f u c k', 'f u c k e r', 'f up', 'f###', 'f##k', 'f##king', 'f#cked', 'f\'ck', 'f-----g', 'f---ed', 'f---ing', 'f--k', 'f-o-a-d', 'f-u-<-k', 'f-u-c-k', 'f-uck', 'f.a.g', 'f.o.a.d', 'f.o.a.d.', 'f.u.c.k', 'f.u.c.k.', 'f.uck', 'f00k', 'f00ked', 'f0cker', 'f0oked', 'f4cker', 'f4g', 'f4nny', 'f<uk', 'f>>k', 'f@@@in', 'f@@@ing', 'f@ck', 'f@g', 'f@gs', 'f__kin', 'f__king', 'f_u_c_k', 'fack', 'fackin', 'facking', 'fag', 'fagg', 'fagg0t', 'fagged', 'fagget', 'fagging', 'faggit', 'faggits', 'faggitt', 'faggot', 'faggotass', 'faggotry', 'faggs', 'fagit', 'fagits', 'fagot', 'fagots', 'fags', 'faig', 'faigt', 'falcid', 'fanny', 'fannybandit', 'fannyflaps', 'fannyfucker', 'fanyy', 'fareskin', 'fartknocker', 'fatass', 'fatso', 'fbuddy', 'fck', 'fck1ng', 'fckeud', 'fckin', 'fcking', 'fcks', 'fckw1t', 'fckwit', 'fcuk', 'fcuked', 'fcuker', 'fcukin', 'fcuking', 'fcuks', 'fecal', 'feck', 'fecker', 'feckin', 'fecking', 'fekking', 'felch', 'felched', 'felcher', 'felching', 'fellate', 'fellatio', 'feltch', 'feltcher', 'feltching', 'female squirting', 'femdom', 'femsub', 'fggt', 'fgt', 'fick', 'figging', 'fingerbang', 'fingerfuck', 'fingerfucked', 'wanker','nigga','negar','nigger','niger','nigge'
 ];

export default profaneWords;