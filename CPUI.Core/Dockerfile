FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["CPUI.Core/CPUI.Core.csproj", "CPUI.Core/"]
RUN dotnet restore "CPUI.Core/CPUI.Core.csproj"
COPY . .
WORKDIR "/src/CPUI.Core"
RUN dotnet build "CPUI.Core.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "CPUI.Core.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "CPUI.Core.dll"]