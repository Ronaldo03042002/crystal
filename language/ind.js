exports.wait = () => {
	return`*「 ESPERE 」PROCESSANDO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
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
	return`*O NÍVEL NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*Como registrar ${prefix}registrar nome | idade* \n*Exemplo ${prefix}registrar Ronaldo|18*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*ALGO DEU ERRADO, TENTE NOVAMENTE MAIS TARDE*`
}

exports.linkga = () => {
	return`*DESCULPE, LINK INVÁLIDO*`
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
	return`*FORMATO INCORRETO / TEXTO EM BRANCO*`
}

exports.clears = () => {
	return`*LIMPO COM SUCESSO*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nPara saber se você se registrou, verifique a mensagem que eu enviei\n\nNOTA:\n* se você não recebeu uma mensagem. significa que você não salvou o número do bot * `
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
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA : NEM SEMPRE O BOT TÁ ONLINE_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱comando : ${command}*\n*┗⊱requisitos de nível: ${ahb}*\n\n_NOTA : NEM SEMPRE O BOT TÁ ONLINE _`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTA : NEM SEMPRE O BOT TÁ ONLINE_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTA : NEM SEMPRE O BOT TÁ ONLINE_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTA : NEM SEMPRE O BOT TÁ ONLINE_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱Nível : ${getLevelingLevel(sender)}*\n*┣⊱comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTA: NEM SEMPRE O BOT TÁ ONLINE_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *SOBRE O USUÁRIO*  ⊰━━┓
┣⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Registro do usuário* : ${_registered.length}
┗━━━⊱🌹ʀᴏɴᴀʟᴅᴏ™🌹⊰━━━━┛


┏━━⊱ *MENU PRINCIPAL* ⊰━━┓
┣⊱ *${prefix}moddroid* <Texto>
┣⊱ *${prefix}happymod* <Texto>
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}igstalk* <Nome do usuário>
┣⊱ *${prefix}tts* <Codigo de pais e Texto>
┣━━⊱ *Música e vídeo* ⊰━━━┫
┣⊱ *${prefix}mp3* <Link>
┣⊱ *${prefix}mp4* <Link>
┣⊱ *${prefix}play* <Autor e música>
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ 
┣━━⊱ *LIMITE E DINHEIRO* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* 
┣⊱ *${prefix}transfer* 
┣⊱ *${prefix}bolsa*
┣━━⊱ *MENU DO GRUPO* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}link*
┣⊱ *${prefix}marcar*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <Membro>
┣⊱ *${prefix}ban* <Membro>
┣⊱ *${prefix}setname* <Texto>
┣⊱ *${prefix}setdesc* <Texto>
┣⊱ *${prefix}rebaixar* <Membro>
┣⊱ *${prefix}promover* <Membro>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}grupo* [abrir/fechar]
┣⊱ *${prefix}leveling* [habilitar/desabilitar]
┣⊱ *${prefix}nsfw* [1/0]
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
┗━━⊱🌹ʀᴏɴᴀʟᴅᴏ™🌹⊰━━━━┛
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
