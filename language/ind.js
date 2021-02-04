exports.wait = () => {
	return`*「 ESPERE 」PROCESSANDO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*Como registrar ${prefix}daftar nome | idade* \n*Exemplo ${prefix}daftar Ronaldo|18*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*Falhou, tente repetir em alguns minutos*`
}

exports.linkga = () => {
	return`*Desculpe, link inválido*`
}

exports.groupo = () => {
	return`*「SÓ EM GRUPO」*`
}

exports.ownerb = () => {
	return`*「SOMENTE O DONO DO BOT PODE USAR」*`
}

exports.ownerg = () => {
	return`*「SOMENTE ADMINISTRADORES PODE USAR ESSE COMANDO」*`
}

exports.admin = () => {
	return`*「SOMENTE ADMINISTRADOR PODE USAR ESSE COMANDO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos *`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*Limpo com successo*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\npara saber se você se registrou, verifique a mensagem que eu enviei\n\nNOTA:\n* se você não recebeu uma mensagem. significa que você não salvou o número do bot * `
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DE USUÁRIO 」*\n\nVocê se registrou com os dados \n\n┏━⊱Nome\n┗⊱${namaUser}\n┏━⊱Número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Idade\n┗⊱${umurUser}\n┏━⊱Hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : NEM SEMPRE VAI ESTAR ON`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* não encontrado\tente digitar *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas algo deu errado ${pushname} *`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpa ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *SOBRE O USUÁRIO*  ⊰━━┓
┣⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *O teu dinheiro* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Função* : ${role}
┣⊱ *Nível* : ${getLevelingLevel(sender)}
┣⊱ *Registro do usuário* : ${_registered.length}
┗━━━⊱  ⸨ *Ronaldo* ⸩  ⊰━━━━┛


┏━━⊱ *MENU PRINCIPAL* ⊰━━┓
┣⊱ *${prefix}moddroid* <texto>
┣⊱ *${prefix}happymod* <texto>
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}igstalk* <nome do usuário>
┣━━⊱ *Música e vídeo* ⊰━━━┫
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}play* <judul>
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMITE E DINHEIRO* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* 
┣⊱ *${prefix}transfer* 
┣⊱ *${prefix}Bolsa*
┣━━⊱ *MENU DO GRUPO* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}marcar*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <Membro>
┣⊱ *${prefix}ban* <Membro>
┣⊱ *${prefix}setname* <Texto>
┣⊱ *${prefix}setdesc* <Texto>
┣⊱ *${prefix}rebaixar* <Membro>
┣⊱ *${prefix}promover* <Membro>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [abrir/fechar]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *MENU DO PROPRIETÁRIO* ⊰━┫
┣⊱ *${prefix}bc* <Texto>
┣⊱ *${prefix}bcgc* <Texto>
┣⊱ *${prefix}kickall* <Banir todos>
┣⊱ *${prefix}setreply* <Texto>
┣⊱ *${prefix}setprefix* <Símbolo>
┣⊱ *${prefix}limpar*
┣⊱ *${prefix}block* <Membro>
┣⊱ *${prefix}unblock* <Membro>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <Membro>
┣⊱ *${prefix}setppbot*
┣━━⊱ ** ⊰━━┫
┃
┣⊱ *Criador:Ronaldo Silva* 
┃
┣⊱ NOTA:NEM SEMPRE O BOT VAI ESTAR ONLINE
┃
┗━━⊱*🌹 ʀᴏɴᴀʟᴅᴏ 🌹*⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 Usuário 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Função* :  ${role}
┗⊱ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje expira*\n*compre limite para obter limite/subir de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE 」*
o resto do seu limite : ${limitCounts}

NOTA: para obter o limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
	return`*Adicionar parâmetros 1/habilitar ou 0/desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinheiro* : ${uangkau}\n┗━━━━━━━━━━`
}
