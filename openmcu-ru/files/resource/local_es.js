window.l_welcome = 'OpenMCU-ru';
window.l_status = 'Estado';

window.l_connections = 'Conexiones';
window.l_connections_OFFLINE_PREFIX    = "<B>[Desconectado]</B>"   ;
window.l_connections_OFFLINE_SUFFIX    = ""                    ;
window.l_connections_HIDDEN_PREFIX     = "<B>[Oculto] </B>"    ;
window.l_connections_HIDDEN_SUFFIX     = ""                    ;
window.l_connections_AUDIO_OUT_STR     = "Salida Audio"        ;
window.l_connections_AUDIO_IN_STR      = "Entrada Audio"       ;
window.l_connections_VIDEO_OUT_STR     = "Salida Video"        ;
window.l_connections_VIDEO_IN_STR      = "Entrada Video"       ;
window.l_connections_AI_NEG_ERR        = "Sin entra de audio"  ;
window.l_connections_AO_NEG_ERR        = "Sin salida de audio" ;
window.l_connections_VI_NEG_ERR        = "Sin entrada de video";
window.l_connections_VO_NEG_ERR        = "Sin salida de video" ;
window.l_connections_BUTTON_TEXT       = "Obtener Texto"       ;
window.l_connections_BUTTON_FORUM      = "Obtener BBCode"      ;
window.l_connections_BUTTON_HTML       = "Obtener HTML"        ;
window.l_connections_BUTTON_CLOSE      = "Cerrar code"         ;
window.l_connections_CODE_TOOLTIP      = "Presione Ctrl+C para copiar";
window.l_connections_DAYS_STR          = "dia(s)"              ;
window.l_connections_COL_NAME          = "Nombre"                ;
window.l_connections_COL_DURATION      = "Duraci&oacute;n"            ;
window.l_connections_COL_RTP           = "Canal RTP: Codec"  ;
window.l_connections_COL_PACKETS       = "Paquetes"             ;
window.l_connections_COL_BYTES         = "Bytes"               ;
window.l_connections_COL_KBPS          = "Kbit/s"              ;
window.l_connections_COL_FPS           = "FPS"                 ;
window.l_connections_word_room         = "Sala"                ;
window.l_connections_COL_LOSTPCN       = "60s p&eacute;rdida"          ;

window.l_records = 'Archivos';
window.l_control = 'Control';
window.l_rooms = 'Salas';
window.l_invite = 'Invitaci&oacute;n';
window.l_invite_s = 'Invitaci&oacute;n con &eacute;xito';
window.l_invite_f = 'Invitaci&oacute;n fallida';
window.l_settings = 'Ajustes';
window.l_param_general = 'General';
window.l_param_registrar = 'Registrar';
window.l_param_conference = 'Conferencia';
window.l_param_export = 'Export(named pipe)';
window.l_param_managing_users = 'Usuarios';
window.l_param_managing_groups = 'Grupos';
window.l_param_control_codes = 'Control codes';
window.l_param_room_codes = 'Sala codes';
window.l_param_h323_endpoints = 'H.323 Endpoints';
window.l_param_sip_endpoints = 'SIP Endpoints';
window.l_param_rtsp = 'Parametros RTSP';
window.l_param_rtsp_servers = 'Servidores RTSP';
window.l_param_rtsp_endpoints = 'RTSP Endpoints';
window.l_param_video = 'Video';
window.l_param_record = 'Grabar';
window.l_param_h323 = 'Parametros H323';
window.l_param_sip = 'Parametros SIP';
window.l_param_sip_proxy = 'Informaci&oacute;n de cuenta';
window.l_param_access_rules = 'Reglas de acceso';
window.l_param_receive_sound = 'Audio codecs (recibe)';
window.l_param_transmit_sound = 'Audio codecs (transmite)';
window.l_param_receive_video = 'Video codecs (recibe)';
window.l_param_transmit_video = 'Video codecs (transmite)';
window.l_param_sip_sound = 'Audio codecs';
window.l_param_sip_video = 'Video codecs';
window.l_help = 'Ayuda';
window.l_forum = 'Foro';
window.l_manual = 'Manual';
window.l_support = 'Soporte';

window.l_info_welcome ='\
<p>\
Servicio OpenMCU-ru se estaacute; ejecutando y aceptando conexiones correctamente.\
</p>\
<p>\
La conferencia iniciada por conexi&oacute;n desde alg&uacute;n terminal funcionar&aacute; en modo no administrado. Todos los miembros ver&aacute;n la misma imagen. En modo no administrado, OpenMCU-ru cambia automaacute;ticamente el dise&ntilde;o dependiendo del n&uacute;mero de miembros de la conferencia, en orden del archivo "layouts.conf". Despu&eacute;s de conectar 100 miembros, otros miembros conectados no ser&aacute;n visibles, pero si ver&aacute;n otros.<br />\
Los flujos de audio en modo no administrado est&aacute;n transmitiendo y recibiendo de todos los miembros conectados.<br />\
</p>\
<p>\
Para probar el servicio, hacer llamada a la habitaci&oacute;n "echo". o para la sala "testroomN", donde N es el n&uacute;mero entre 1 y 100.<br />\
</p>\
<p>\
La administraci&oacute;n del servidor se realiza desde el men&uacute; principal en la parte superior de la p&aacute;gina. <br /> \
P&aacute;gina <b> Estado </ b> muestra las conexiones actuales y los par&aacute;metros del terminal. <br /> \
En la p&aacute;gina <b> Control </ b> las salas se pueden configurar en modo gestionado. <br /> \
En la p&aacute;gina <b> Ajustes </ b> se pueden establecer los par&aacute;metros globales del servidor. <br /> \
Puede encontrar m&aacute;s informaci&oacute;n en <b> Ayuda </ b> (el enlace lleva al sitio oficial de Internet). <br /> \</p>\
<p>A continuaci&oacute;n se muestra un resumen del servidor.</p>\
';

window.l_welcome_logo ='\
<p>\
<b>Imagen de logotipo personalizada</b>\
</p>\
<p>\
Esta imagen se muestra cuando no hay video de entrada en el mezclador. Aceptan solo BMP, JPEG(m&aacute;ximo 500kB), PNG, GIF.\
</p>\
';

window.l_info_invite ='';
window.l_info_invite_f ='';
window.l_info_invite_s ='';
window.l_info_rooms ='Para ver la sala y configurarla en modo administrado - haga clic en su nombre.';

window.l_info_control ='\
<div id=\'tip\' name=\'tip\'\
  onclick=\'if(typeof savedhelpcontent=="undefined"){savedhelpcontent=this.innerHTML;this.innerHTML="Esta p&aacute;gina se utiliza para administrar su conferencia. Puede elegir participantes de la lista y colocarlos en las partes deseadas de una pantalla con la funci&oacute;n de control de dise&ntilde;o (arrastrar y soltar a las cajas desplegables). Cada posici&oacute;n puede ser asignada a cualquier participante directamente (est&aacute;tica), o puede ser activada por voz. Las posiciones activadas por voz se pueden marcar como VAD o VAD2 (la mayor&iacute;a de los participantes activos se mover&aacute;n autom&aacute;ticamente de VAD a VAD2).";}else {this.innerHTML=savedhelpcontent; try {delete savedhelpcontent;} catch(e){savedhelpcontent=undefined;};}\'\
>Esta p&aacute;gina se utiliza para\
 <span style=\'cursor:pointer;font-weight:bold;color:#095\'> ...</span>\
</div>';

window.l_info_records ='\
La p&aacute;gina muestra el directorio de registros de v&iacute;deo (en el servidor), \
y permite descargarlos.';

window.l_info_connections ='\
La p&aacute;gina muestra las conexiones actuales y los par&aacute;metros del terminal.\
';
window.l_info_param_general ='Par&aacute;metros globales del servidor.';
window.l_info_param_registrar = '';
window.l_info_param_conference ='';
window.l_info_param_managing_users = '';
window.l_info_param_managing_groups = '';
window.l_info_param_control_codes = '';
window.l_info_param_room_codes = '';
window.l_info_param_video ='Caldiad del video de salida.';
window.l_info_param_record ='Calidad de grabaci&oacute;n.';
window.l_info_param_h323 ='';
window.l_info_param_sip ='';
window.l_info_param_access_rules ='';
window.l_info_param_sip_proxy ='';
window.l_info_param_receive_sound = '';
window.l_info_param_transmit_sound = '';
window.l_info_param_receive_video = '';
window.l_info_param_transmit_video = '';

window.l_select_create =       'Crear sala'
window.l_select_enter =        'Entrar en la sala'
window.l_select_record =       'Grabar'
window.l_select_moderated =    'Moderar'
window.l_select_moderated_yes ='Si'
window.l_select_moderated_no = 'No'
window.l_select_visible =      'Miembros visibles'
window.l_select_unvisible =    'Miembros invisibles'
window.l_select_duration =     'Duraci&oacute;n'
window.l_select_delete =       'Borrar sala'

window.l_not_found = 'Perdido';

window.l_name_accept         = 'Aceptar';
window.l_name_reset          = 'Reiniciar';
window.l_name_user           = 'Usuario';
window.l_name_host           = 'Host';
window.l_name_group          = 'Grupo';
window.l_name_password       = 'Contrase&ntilde;a';
window.l_name_roomname       = 'Nombre sala';
window.l_name_access         = 'Acceso';
window.l_name_action         = 'Acci&oacute;n';
window.l_name_code           = 'Code';
window.l_name_message        = 'Mensaje';
window.l_name_address        = 'Direcci&oacute;n';
window.l_name_address_book   = 'Directorio';
window.l_name_save           = 'Salvar';
window.l_name_cancel         = 'Cancelar';
window.l_name_advanced       = 'Avanzado';
window.l_name_auto_create              = 'Creaci&oacute;n autom&aacute;tica';
window.l_name_force_split_video        = "Cache y control mediante navegador";
window.l_name_auto_delete_empty        = 'Auto borrar';
window.l_name_auto_record_start        = 'Auto grabar';
window.l_name_auto_record_stop         = 'Auto grabar (parar)';
window.l_lock_tpl_default              = "Plantilla bloquear conferencia por defecto";
window.l_name_recall_last_template     = 'Recuperar &uacute;ltima plantilla';
window.l_name_time_limit               = 'L&iacute;mite de tiempo';

window.l_name_display_name                         = 'Anular nombre a ver';
window.l_name_frame_rate_from_mcu                  = 'Frecuencia de Fotogramas MCU';
window.l_name_bandwidth_from_mcu                   = 'Ancho banda desde MCU, Kbit/s';
window.l_name_bandwidth_to_mcu                     = 'Ancho de banda hacia MCU, Kbit/s';
window.l_name_transport                            = 'Transportador';
window.l_name_port                                 = 'Puerto';

window.l_name_registrar                            = 'Registrar';
window.l_name_account                              = 'Cuenta';
window.l_name_register                             = 'Registro';
window.l_name_address_sip_proxy                    = 'Direcci&oacute;n SIP-proxy';
window.l_name_expires                              = 'Caduca';
window.l_name_path                                 = 'Camino';
window.l_name_enable                               = 'Habilitar';

window.l_name_registered                           = 'Registrado';
window.l_name_connected                            = 'Conectado';
window.l_name_last_ping_response                   = '&Uacute;ltima respuesta';

window.l_name_codec                                = 'Codec';
window.l_name_audio                                = 'Audio';
window.l_name_video                                = 'Video';
window.l_name_audio_receive                        = 'Audio (recibe)';
window.l_name_audio_transmit                       = 'Audio (transmite)';
window.l_name_video_receive                        = 'Video (recibe)';
window.l_name_video_transmit                       = 'Video (transmite)';
window.l_name_audio_codec                          = 'Audio codec';
window.l_name_video_codec                          = 'Video codec';
window.l_name_audio_codec_receive                  = 'Audio codec(recibe)';
window.l_name_video_codec_receive                  = 'Video codec(recibe)';
window.l_name_audio_codec_transmit                 = 'Audio codec(transmite)';
window.l_name_video_codec_transmit                 = 'Video codec(transmite)';
window.l_name_video_resolution                     = 'Video resoluci&oacute;n';

window.l_name_parameters_for_sending               = "Par&aacute;metros de env&iacuteo";
window.l_name_codec_parameters                     = "Par&aacutemetros Codec<br>(anulaci&oacuten recibida)";
window.l_name_default_parameters                   = "Par&aacutemetros predeterminados";

window.l_room_mute_all                             = 'Silenciar a todos los participantes (micr&oacutefonos)';
window.l_room_unmute_all                           = 'Activar todos los participantes (micr&oacutefonos)';
window.l_room_invite_all_inactive_members          = 'Invitar a TODOS los miembros inactivos';
window.l_room_dial_all_members                     = 'Ejecutar marcado continuo a TODOS los miembros';
window.l_room_drop_all_active_members              = 'Eliminar todas las conexiones activas';
window.l_room_remove_all_inactive_members          = 'Quitar TODOS los miembros inactivos de la lista';
window.l_room_drop_connection_with                 = 'Eliminar la conexioacute;n con';
window.l_room_remove_from_list                     = 'Quitar de la lista';

window.l_room_deletion_text = ["",                   "Cierre de sala &laquo;%&raquo;: desconectar a los participantes",
                                                     "Cierre de sala &laquo;%&raquo;: esperando a que los participantes salg&aacute;n de la sala",
                                                     "Cierre de sala &laquo;%&raquo;: desconectar miembros ocultos del sistema",
                                                     "Cierre de sala &laquo;%&raquo;: esperando que los miembros salg&aacute;n de la sala",
                                                     "Room &laquo;%&raquo; Eliminado"
];

window.l_takecontrol                               = "El modo de trabajo de conferencia actual es autom&aacute;tico (no administrado). Haga clic para operar la conferencia por su cuenta (tomar el control).";
window.l_decontrol                                 = "El modo de trabajo de conferencia actual es gestionado por el operador (que es usted). Haga clic si decea detener la administraci&oacute;n y convertir la conferencia en estado no administrado (autom&aacute;tico).";
window.l_vadsetup                                  = "Par&aacute;metros de detecci&oacute;n de actividad vocal (VAD)";
window.l_globalmute                                = "Los miembros invisibles son UNMUTED. Haga clic para silenciar.";
window.l_globalunmute                              = "Los miembros invisibles son MUTADOS. Haga clic para activar el sonido.";
window.l_filtermode                                = [
                                                       "Escala de video FASTEST actualmente seleccionada, peor calidad."
                                                      ,"Escala de video BILINEAR actualmente seleccionada, &oacute;ptima para la mayor&iacute;a de los casos."
                                                      ,"BOX FILTER actualmente seleccionado para la escala de video - perfecto, pero lento."
                                                     ];
window.l_videorecorder                             = "Iniciar grabaci&oacute;n de video";
window.l_videorecorderstop                         = "Detener grabaci&oacute;n de video";
window.l_pleasetakecontrol                         = "Esto no se pudo hacer porque la conferencia est&aacute; funcionando en modo no administrado (autom&aacute;tico).";
window.l_decontrolmixersconfirm                    = "Usted est&aacute; convirtiendo la conferencia en modo no administrado. \r\ Los mezcladores de v&iacute;deo adicionales se eliminar&aacute;n y el &uacute;nico se mantendr&aacute;. \r\ ¿Seguro que desea continuar?";
window.l_templatedeleteconfirm                     = "Plantilla * Borrada";
window.l_changelogo                                = "Cambio: ";

window.l_dir_no_records                            = "El directorio no contiene registro en este momento.";
window.l_download                                  = "Descargar";
window.l_delete                                    = "Borrar";
window.l_totaldrivesize                            = "Volumen de la Unidad: * GiB.";
window.l_recordstakesup                            = "Registro ocupa: * GiB (%).";
window.l_freespaceleft                             = "Espacio libre:  * GiB (%).";
window.l_recwilldeleted                            = "* ser&aacute; borrado!";
window.l_recwilldeleted_ok                         = "[OK]";
window.l_recwilldeleted_cancel                     = "Cancelar";
window.l_recwasdeleted                             = "* ha sido eliminado";
window.l_filesize                                  = "Tama&ntilde;o del archivo";
window.l_resolution                                = "Resoluci&oacute;n";
window.l_startdatetime                             = "Fecha/Hora Inicio";

///
window.l_restore_defaults                          = "RESTAURAR VALORES PREDETERMINADOS";
window.l_language                                  = "Lenguage";
window.l_server_id                                 = "OpenMCU-ru Servidor Id";
window.l_default_protocol_for_outgoing_calls       = "Protocoo predetermiando llamadas salientes";
window.l_http_secure                               = "HTTP seguro";
window.l_http_certificate                          = "HTTP certificado";
window.l_http_ip                                   = "HTTP IP";
window.l_http_port                                 = "HTTP Puerto";
window.l_rtp_base_port                             = "RTP Base Port";
window.l_rtp_max_port                              = "RTP Max Port";
window.l_trace_level                               = "Nivel de seguimiento";
window.l_rotate_trace                              = "Rotar archivos de siguimiento al inicio";
window.l_log_level                                 = "Nivel de registro (log)";
window.l_call_log_filename                         = "Nombre archivo registro(log) de llamadas";
window.l_room_control_event_buffer_size            = "Tama&ntilde;o buffer de evento de las salas";
window.l_copy_web_log                              = "Copiar registro web enr egistrode llamadas";
window.l_default_room                              = "Sala predetermianda";
window.l_reject_duplicate_name                     = "Rechazar nombre duplicado";
window.l_allow_loopback_calls                      = "Permitir llamadas bucle de retorno";
window.l_auto_dial_delay                           = "Retardo de marcaci&oacute;n autom&aacute;tico";
///
window.l_allow_internal_calls                      = "Permitir llamdas internas";
window.l_sip_allow_reg_without_auth                = "SIP permite registro sin autenticaci&oacute;n";
window.l_sip_allow_mcu_calls_without_auth          = "SIP permite llamadas MCU sin autenticaci&oacute;n";
window.l_sip_allow_internal_calls_without_auth     = "SIP permite llamadas internas sin autenticaci&oacute;n";
window.l_sip_registrar_minimum_expiration          = "SIP vencimiento m&iacute;nimo del registrador";
window.l_sip_registrar_maximum_expiration          = "SIP vencimiento m&aacaute;ximo del registrador";
window.l_h323_gatekeeper_enable                    = "H.323 gatekeeper habilitar";
window.l_h323_allow_reg_without_auth               = "H.323 permite registro sin autenticaci&oacute;n";
window.l_h323_allow_mcu_calls_without_reg          = "H.323 permite llamadas MCU sin autenticaci&oacute;n";
window.l_h323_allow_internal_calls_without_reg     = "H.323 permite llamadas internas sin autenticaci&oacute;n";
window.l_h323_allow_duplicate_aliases              = "H.323 permite alias duplicados";
window.l_h323_gatekeeper_minimum_ttl               = "H.323 gatekeeper tiempo m&iacute;nimo para estar";
window.l_h323_gatekeeper_maximum_ttl               = "H.323 gatekeeper tiempo m&aacute;ximo para estar";
///
window.l_enable_video                              = "Habilitar video";
window.l_max_bit_rate                              = "Max bit Veloc";
window.l_tx_key_frame_period                       = "Tx periodo marco clave";
window.l_encoding_threads                          = "Hilo de codificaci&oacute;n";
window.l_encoding_cpu_used                         = "Codificaci&oacute;n usada del CPU";
///
window.l_enable_export                             = "Habilitar exportaci&oacute;n";
window.l_video_frame_rate                          = "Video veloc fotograma";
window.l_video_inter_packet_delay                  = "Video retraso entre paquetes";
window.l_video_frame_width                         = "Video ancho marco";
window.l_video_frame_height                        = "Video altura marco";
window.l_audio_sample_rate                         = "Audio frecuencia muestreo";
window.l_audio_channels                            = "Audio canales";
window.l_video_bitrate                             = "Video bitrate";
window.l_audio_bitrate                             = "Audio bitrate";
///
window.l_listener                                  = "Oyente";
window.l_interface                                 = "Interfaz";
window.l_nat_router_ip                             = "NAT Router IP";
window.l_treat_as_global_for_nat                   = "NAT tratada como global";
window.l_disable_fast_start                        = "Desactivar inicio r&aacute;pido";
window.l_disable_h245_tunneling                    = "Inhabilitar H.245 Tunel";
window.l_gk_mode                                   = "Gatekeeper modo";
window.l_gk_reg_ttl                                = "Gatekeeper registro TTL(tiempo de vida)";
window.l_gk_reg_retry_interval                     = "Gatekeeper intervalos de reintentos de solicitud";
window.l_gk_host                                   = "Gatekeeper host";
window.l_gk_username                               = "Gatekeeper nombre usuario";
window.l_gk_password                               = "Gatekeeper contrase&ntilde;a";
window.l_gk_room_names                             = "Gatekeeper nombre sala";
///
window.l_server                                    = "Servidor";
window.l_server_list                               = "Lista Servidor";
///
window.l_directory                                 = "Directoro";
window.l_rtp_input_timeout                         = "RTP tiempo de espera de entrada";
window.l_received_vfu_delay                        = "Limitaci&oacute;n VFU, r/s";
window.l_video_cache                               = "Video cache";
window.l_interval                                  = "Intervalo";
window.l_internal_call_processing                  = "Procesamiento interno de llamadas";
window.l_room_auto_create_when_connecting          = "Creaci&oacute;n autom&aacute;tica al conectar";
window.l_enter_template_name                       = "Ingresar ID de plantilla";
window.l_disconnect                                = "Desconectar";
window.l_add_to_abook                              = "Agregar a la libreta de direcciones";
window.l_accounts                                  = "Cuentas";
///
window.l_param_telserver = 'Telnet server';
window.l_info_telserver = '';
///
window.l_mute_new_conference_users                 = 'Silenciar nuevos usuarios en la conferencia';
window.l_unmute_new_conference_users = 'Activar sonido nuevos usuarios en la conferencia';
