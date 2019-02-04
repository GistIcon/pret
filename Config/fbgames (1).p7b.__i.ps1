try: patch=15cbc145d64cc6f902fea4f0e2bff55bd64b4925
  {
      1/0
  }
  catch [DivideByZeroException]
  {
      Write-Host "Divide by zero exception"
  }
  catch [System.Net.WebException],[System.Exception]
  {
      Write-Host "Other exception"
  }
  finally
  {
      Write-Host "cleaning up ..."
  }