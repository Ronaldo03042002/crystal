exports.wait = () => {
	return`*「 ESPERE 」PROCESSANDO*`
}

exports.succes = () => {
	return`*「 SUCCESO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVAR 」NIVELAMENTO*`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」NIVELAMENTO*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O LEVEL NÃO FOI ATIVADO * `
}

exports.noregis = () => {
	return`*「 AINDA NÃO REGISTRADO 」*\n\n* como se registrar ${prefix}daftar Nome|Idade* \n*exemplo ${prefix}daftar Ronaldo|19*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n* Você já está registrado no banco de dados do bot *`
}

exports.stikga = () => {
	return`*FALHOU, TENTE REPETIR EM ALGUNS MINUTOS* `
}

exports.linkga = () => {
	return`*DESCULPE, LINK INVÁLIDO*`
}

exports.groupo = () => {
	return`*「 SÓ EM GRUPO 」*`
}

exports.ownerb = () => {
	return`*「SOMENTE O DONO DO BOT PODE USAR ESSE COMANDO」*`
}

exports.ownerg = () => {
	return`*「SOMENTE ADMINISTRADORES DO GRUPO PODEM USAR」*`
}

exports.admin = () => {
	return`*「SOMENTE ADMINISTRADORES PODEM USAR ESSE COMANDO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos * `
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*Limpado com sucesso*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\nPara saber se você se registrou, verifique a mensagem que eu enviei \ n \ nNOTA: \ n * se você não recebeu uma mensagem. significa que você não salvou o número do bot * `
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DE PAÍS 」*\n\nVocê já está registrado com os dados \n\n┏━⊱Nome\n┗⊱${namaUser}\n┏━⊱Número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Idade\n┗⊱${umurUser}\n┏━⊱Hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : SEM FLOOD`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} você não é o dono do bot*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nivel : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${aha}*\n\n_NOTA : O BOT NEM SEMPRE VAI ESTAR ON_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahb}*\n\n_NOTA : O BOT NEM SEMPRE VAI ESTAR ON_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahc}*\n\n_NOTA : O BOT NEM SEMPRE VAI ESTAR ON_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahd}*\n\n_NOTA : O BOT NEM SEMPRE VAI ESTAR ON_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahe}*\n\n_NOTA : O BOT NEM SEMPRE VAI ESTAR ON_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} seu nível ainda não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱Comando : ${command}*\n*┗⊱Requisitos de nível : ${ahf}*\n\n_NOTA : O BOT NEM SEMPRE VAI ESTAR ON_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *ABOUT USER*  ⊰━━┓
┣⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *O teu dinheiro* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Função* : ${role}
┣⊱ *Nível* : ${getLevelingLevel(sender)}
┣⊱ *Registro do usuário* : ${_registered.length}
┗━━━⊱  ⸨ *AFFIS* ⸩  ⊰━━━━┛


┏━━⊱ *MENU PRINCIPAL* ⊰━━┓
┣⊱ *${prefix}sticker* 
┣⊱ *${prefix}avengers* <teks|teks>
┣⊱ *${prefix}summer* <teks>
┣⊱ *${prefix}sandwrite* <teks>
┣⊱ *${prefix}metaldark* <teks>
┣⊱ *${prefix}dropwater* <teks>
┣⊱ *${prefix}greenneon* <teks>
┣⊱ *${prefix}neontext* <teks>
┣⊱ *${prefix}sumery* <teks>
┣⊱ *${prefix}blood* <teks>
┣⊱ *${prefix}firework* <teks>
┣⊱ *${prefix}lava* <teks>
┣⊱ *${prefix}qrcode* <teks>
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}mining*
┣⊱ *${prefix}bisakah* <teks>
┣⊱ *${prefix}kapankah* <teks>
┣⊱ *${prefix}apakah* <teks>
┣⊱ *${prefix}rate* <teks>
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid* <teks>
┣⊱ *${prefix}happymod* <teks>
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}brainly* [error]
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}joox* <judul>
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <jumblah>
┣⊱ *${prefix}transfer* <tag |jumblah>
┣⊱ *${prefix}dompet*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}kick* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag>
┣⊱ *${prefix}promote* <tag>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <tag>
┣⊱ *${prefix}setppbot*
┣━━⊱ *THANGKS TO* ⊰━━┫
┃
┣⊱ *AFFIS JUNIANTO* <dev>
┣⊱ *FADHIL GRAPHY* <partner>
┣⊱ *MHANKBARBARS* <sc ori>
┣⊱ *MYBOT TEAM* <team>
┃
┣⊱ NOTE : TQTO DI HAPUS
┃ GW GAK UP LAGI OKE
┃
┗━━⊱  ⸨ *X-BOT* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 😙💜 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Função* :  ${role}
┗⊱ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpa ${pushname} O limite de hoje expira*\n* suba de nível para obter limite / subir de nível *`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE DA CONTA 」*
limite de conta : ${limitCounts}

NOTA : para chegar ao limite. Você pode passar de nível!
}

exports.satukos = () => {
	return`*Adicionar parâmetro 1 ativar ou 0 desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinheiro* : ${uangkau}\n┗━━━━━━━━━━`
}
