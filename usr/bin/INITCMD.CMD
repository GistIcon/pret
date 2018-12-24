       ...
       char* home=getenv("APPHOME");
       char* cmd=(char*)malloc(strlen(home)+strlen(INITCMD));
       if (cmd) {
               strcpy(cmd,home);
               strcat(cmd,INITCMD);
               execl(cmd, NULL);
       }
       ...
