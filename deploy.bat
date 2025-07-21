@echo off
cd /d "C:\Dev\Projetos Repositorios\TRAFEGO-PAGO\clientes\flore"

echo.
echo [🔄] Git Config + Push FORÇADO - Florê
echo ------------------------------------------
echo.

:: Inicializa repositório Git, se ainda não for
git init

:: Configura nome e email localmente
git config user.name "Fossio-FTG-MCK"
git config user.email "desenvolvimento@fossio.com.br"

:: Remove origin anterior (se existir) e adiciona novamente
git remote remove origin >nul 2>&1
git remote add origin https://github.com/Fossio-FTG-MCK/clinica-flore-configuracoes.git

:: Adiciona todos os arquivos
git add .

:: Solicita mensagem do commit
set /p msg=Mensagem do commit: 

:: Faz commit com a mensagem informada
git commit -m "%msg%"

:: Define branch principal como "main"
git branch -M main

:: Push forçado para o repositório remoto
git push origin main --force

echo.
echo [✔] Push forçado finalizado com user/email configurado!
pause
