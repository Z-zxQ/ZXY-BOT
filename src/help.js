const help = (prefix, copid, tanggal, jams, botname) => {
	return `γ  *${botname}*  γ

*β¦Ώ Bot Prefix :* ${prefix}π 
*β¦Ώ Creator :* MhankBarBarπ
*β¦Ώ Recode By :* @Zxagungπ
*β¦Ώ Today :* ${tanggal}β οΈ
*β¦Ώ Jam :* ${jams}β οΈ

βγ  *Kasus Covid-19 Indonesia*  γ
β *Terinfeksi :* ${copid[0].kasus}
β *Kematian :* ${copid[0].kematian}
β *Sembuh :* ${copid[0].sembuh}

β *Group Menu* 
β *${prefix}setname* [text]
β *${prefix}setdesc* [text]
β *${prefix}setpp* [img]
β *${prefix}promote* [tag]
β *${prefix}demote* [tag]
β *${prefix}leave*
β *${prefix}tagall* 
β *${prefix}hidetag*
β *${prefix}nsfw* [1/0]
β *${prefix}welcome* [1/0]
β *${prefix}listadmin*
β *${prefix}antilink* [1/0]
β *${prefix}add* [62ΓΓΓ]
β *${prefix}kick* [tag mem]
β *${prefix}afk [alasan]*
β *${prefix}fitnah [tag|tulisan|tulisan]*
β *${prefix}antijawa [1/0]*
β *${prefix}antiwibu [1/0]*
β *${prefix}antibocil [1/0]*
β *${prefix}antigay [1/0]*
β *${prefix}antibucin [1/0]*
β *${prefix}antitoxic [1/0]*
β *${prefix}group* buka/tutup

β *Maker*
β *${prefix}tomp3*
β *${prefix}tovn*
β *${prefix}sticker*
β *${prefix}swm* [author]|[pack]
β *${prefix}tovideo*
β *${prefix}toimg*
β *${prefix}attp [teks]*
β *${prefix}wasted*
β *${prefix}triggered*
β *${prefix}tts* [Text]

β *Downloader*
β *${prefix}ytmp3* [Url]
β *${prefix}ytmp4* [Url]
β *${prefix}dafontdown* [Url]
β *${prefix}facebook* [Url]
β *${prefix}instagram* [Url] [Options]
β *${prefix}tiktok* [Url]
β *${prefix}soundcloud* [Url]
β *${prefix}pinterest* [Query]
β *${prefix}play* [Query] [Options]
β *${prefix}joox* [Query]

β *New Vitur*
β *${prefix}loli*
β *${prefix}pictlolicon*
β *${prefix}anime*
β *${prefix}randomanime*
β *${prefix}randomanimev2*
β *${prefix}waifukawai*
β *${prefix}markzug*
β *${prefix}donghoua*
β *${prefix}randomsemok*
β *${prefix}blowjob*
β *${prefix}neko*

β *FunMenu*
β *${prefix}tebakgambar*
β *${prefix}caklontong*
β *${prefix}jadian*
β *${prefix}dare*
β *${prefix}truth*
β *${prefix}bisakah*
β *${prefix}kapankah*
β *${prefix}apakah*
β *${prefix}bagaimanakah*
β *${prefix}gaycek*
β *${prefix}sangecek*
β *${prefix}hobby*
β *${prefix}speed*

β *soundloliMenu*
β *${prefix}sound1*
β *${prefix}sound2*
β *${prefix}sound3*
β *${prefix}sound4*
β *${prefix}sound5*
β *${prefix}sound6*
β *${prefix}sound7*
β *${prefix}sound8*
β *${prefix}sound9*
β *${prefix}sound10*
β *${prefix}sound11*
β *${prefix}sound12*
β *${prefix}sound13*
β *${prefix}sound14*
β *${prefix}sound15*
β *${prefix}sound16*
β *${prefix}sound17*
β *${prefix}sound18*
β *${prefix}sound19*
β *${prefix}sound20*
β *${prefix}sound21*
β *${prefix}sound22*
β *${prefix}sound23*
β *${prefix}sound24*
β *${prefix}sound25*

β *Ownermenu*
β *${prefix}bc*
β *${prefix}addprem*
β *${prefix}dellprem*

β *Searching*
β *${prefix}ytsearch* [Query]
β *${prefix}brainly* [Query]
β *${prefix}herolist*
β *${prefix}herodetail* [Nama hero]
β *${prefix}dafontsearch* [Query]
β *${prefix}google* [Query]
β *${prefix}wiki* [Query]
β *${prefix}quotes* [Query]
β *${prefix}preview* teks|ukuran 
β *${prefix}ocr*
β·β·β·β·β·βαͺ₯ββΆβΆβΆβΆβΆ
Tanda Kurung [ ] Hiraukan Contoh :
*${prefix}play fly away*

_Nemuin *Bugπ?* Ketik *${prefix}bugreport* Untuk Melaporkan Bug!_
_Jika ingin save nomor *Ownerβ¨?* Ketik *${prefix}creator* Untuk Save Nomor!_
_Follow Github_ : https://github.com/z-zxq
β·β·β·β·β·βαͺ₯ββΆβΆβΆβΆβΆ
β οΈJANGAN SPAM BOT INI !!..
π TETAP DI RUMAH AJA DAN LAKUKAN 3M
β·β·β·β·β·βαͺ₯ββΆβΆβΆβΆβΆβΆ
`}

exports.help = help
