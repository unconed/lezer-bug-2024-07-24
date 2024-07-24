// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
import {untilEOLToken} from "./tokens"
const spec_Identifier = {__proto__:null,const:20, array:26, bool:28, f16:30, f32:32, i32:34, u32:36, vec2:38, vec3:40, vec4:42, vec2i:44, vec3i:46, vec4i:48, vec2u:50, vec3u:52, vec4u:54, vec2f:56, vec3f:58, vec4f:60, vec2h:62, vec3h:64, vec4h:66, ptr:68, function:70, private:72, workgroup:74, uniform:76, storage:78, read:80, write:82, read_write:84, mat2x2:86, mat2x3:88, mat2x4:90, mat3x2:92, mat3x3:94, mat3x4:96, mat4x2:98, mat4x3:100, mat4x4:102, atomic:104, sampler:106, sampler_comparison:108, texture_depth_2d:110, texture_depth_2d_array:112, texture_depth_cube:114, texture_depth_cube_array:116, texture_depth_multisampled_2d:118, texture_1d:120, texture_2d:122, texture_2d_array:124, texture_3d:126, texture_cube:128, texture_cube_array:130, texture_multisampled_2d:132, texture_storage_1d:134, texture_storage_2d:136, texture_storage_2d_array:138, texture_storage_3d:140, rgba8unorm:142, rgba8snorm:144, rgba8uint:146, rgba8sint:148, rgba16uint:150, rgba16sint:152, rgba16float:154, r32uint:156, r32sint:158, r32float:160, rg32uint:162, rg32sint:164, rg32float:166, rgba32uint:168, rgba32sint:170, rgba32float:172, override:176}
export const parser = LRParser.deserialize({
  version: 14,
  states: "*zOYQQOOPkOQOOOpQQO'#CaOOQO'#EY'#EYOuQQO'#C`O!QQQO'#C^OOQO'#Ec'#EcOOQO'#EX'#EXO!VQQO'#EbQOQQOOO!hQQO'#C_P!pQRO'#E`POOO)C@S)C@SO!uQQO,58{OOQO-E8W-E8WOOQO,58x,58xOOQO-E8V-E8VO#TQQO,58yO#TQQO,58yPOOO,5:z,5:zO#YQQO1G.gO#hQQO'#CgO#sQQO1G.eO#xQQO1G.eOOQO'#Eg'#EgO$QQQO7+$RO#YQQO7+$RO$YQQO,59ROOQO7+$P7+$POOQO,5:u,5:uOOQO<<Gm<<GmO'kQQO<<GmOOQO-E8X-E8XOOQO'#Es'#EsO'sQQO'#EsO'xQQO'#EsOOQO'#Ch'#ChOOQO1G.m1G.mO'}QQO'#ChOOQO'#Et'#EtOOQO'#Eu'#EuOOQO'#Ev'#EvOOQO'#Ew'#EwO(`QQO'#ChO(qQQO'#ChO'sQQO'#ChOOQOAN=XAN=XP(vQQO'#EZO$YQQO'#EkOOQO,5;_,5;_O({QQO'#ExO$YQQO,5;]OOQO,59S,59SO*PQQO'#EnO*bQQO,5;VO*gQQO,5;dOOQO'#Ey'#EyO*lQQO1G0wO*tQQO,5;YOOQO'#Eo'#EoOOQO1G0q1G0qO*yQQO1G1OOOQO7+&c7+&cO+UQQO7+&cO$YQQO1G0tO+aQQO7+&jOOQO'#Ep'#EpOOQO'#Er'#ErO+fQQO<<I}O+kQQO7+&`OOQO<<JU<<JUOOQOAN?iAN?iOOQO<<Iz<<IzO*yQQO<<IzO+sQQOAN?fOOQOG25QG25Q",
  stateData: ",P~O#ROS#TPQ~O#WUO#XQOYSP!zSP#O#UP~O#TZO~OU]O~O#XQOYSX!zSX~O#W_O~O#WUO#XQOYSP!zSP#O#UX~OYaO!zbO~O#PcO~O#YdOYTa!zTa#XTa~OUeO~OUhOVhOWhOXhO~O#^kO!yZX#WZX~O!ylO~O!ylO#WRi~O#[mO#]nO~OUtO]vO^tO_tO`tOatObtOc{Od{Oe{OftOgtOhtOitOjtOktOltOmtOntOotOptOqtOr|O{{O|{O}{O!O{O!P{O!Q{O!R{O!S{O!T{O!U}O!VwO!WwO!XxO!YxO!ZxO![xO!]xO!^yO!_yO!`yO!ayO!byO!cyO!drO!ezO!fzO!gzO!hzO~O#[mO#]!OO~O#`!QO~O#`!SO~O#`!TO!y[X#W[X#a[X#[[X~O#`!QO!y[X#W[X#a[X#[[X~O#`!VO~O#[mO~O!i!YO!j!YO!k!YO!l!YO!m!YO!n!YO!o!YO!p!YO!q!YO!r!YO!s!YO!t!YO!u!YO!v!YO!w!YO!x!YO~Os!]Ot!]Ou!]Ov!]Ow!]O~O#a!^O~O#[!_O~O#[!aO#a!`O~O#[!bO~Ox!dOy!dOz!dO~OU!eOV!eOW!eO~O#a!hO~O#a!iO~O#[!kO#a!jO~O#a!mO~O#TXWVUW~",
  goto: "&_#nPP#o#s#w#{PPPPP$Q$WPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP$d$j$qPPPP$wP$z$}PPP%RPPP%XPP%`%c%f%l%r%l%u%u%{&R&X&[TUOWTTOWTYOWVROSWQfaRgbQukQ!W!QQ!Z!TR!g!bQWOR`WSSOWR^SQjdRpjR[PRXOTVOWQidRojQ!RrT!U{}R!U|R![!VQ!c!_R!l!kXtk!Q!T!bR!f!aXqk!Q!T!bXrk!Q!T!bXsk!Q!T!bR!RsR!X!S",
  nodeNames: "⚠ Program LocalDeclaration GlobalConstantDeclaration AttributeList Attribute Identifier IntLiteral UintLiteral FloatLiteral Keyword VariableIdentifier TypeDeclaration Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Type Type Type Type Type Type Type Type Type Type Type Type Keyword Keyword Keyword Keyword Keyword Type Type Type Type Type Type Keyword Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Type Assign Keyword",
  maxTerm: 121,
  skippedNodes: [0],
  repeatNodeCount: 3,
  tokenData: ")s~RkX^!vpq!vxy#kyz#p|}#u}!O#z!O!P%`!P!Q%f!Q!R%q!R![(^![!](r!]!^(w!^!_(|!_!`)R!`!a)W!b!c)]!c!})b#R#S)b#T#o)b#y#z!v$f$g!v#BY#BZ!v$IS$I_!v$I|$JO!v$JT$JU!v$KV$KW!v&FU&FV!v~!{Y#R~X^!vpq!v#y#z!v$f$g!v#BY#BZ!v$IS$I_!v$I|$JO!v$JT$JU!v$KV$KW!v&FU&FV!v~#pO#Y~~#uO#]~~#zO#[~~#}P!Q![$Q~$TQ!O!P$Z!Q![$Q~$`SX~!Q![$Z!g!h$l#X#Y$l#Y#Z%Z~$oR{|$x}!O$x!Q![%O~${P!Q![%O~%TQX~!Q![%O#Y#Z%Z~%`OX~~%cP!Q![$Z~%iP!P!Q%l~%qO#T~~%vVV~!O!P$Z!Q![&]!g!h$l!z!{&l#X#Y$l#i#j(X#l#m&l~&`S!O!P$Z!Q![&]!g!h$l#X#Y$l~&oS!O!P&{!Q!['m!c!i'm#T#Z'm~'OR!Q!['X!c!i'X#T#Z'X~'^TX~!Q!['X!c!i'X!r!s$l#T#Z'X#d#e$l~'rVV~!O!P'X!Q!['m!c!i'm!r!s$l#T#Z'm#d#e$l#i#j(X~(^OW~~(cTV~!O!P$Z!Q![(^!g!h$l#X#Y$l#i#j(X~(wO#^~~(|O#W~~)RO#`~~)WO!y~~)]O#a~~)bO#X~~)gSU~!Q![)b!c!})b#R#S)b#T#o)b",
  tokenizers: [untilEOLToken, 0],
  topRules: {"Program":[0,1]},
  specialized: [{term: 6, get: (value: any) => (spec_Identifier as any)[value] || -1}],
  tokenPrec: 500
})
