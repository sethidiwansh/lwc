public without sharing class DemoApex {
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAllAccounts(String search,Integer records) {
      search='%'+search+'%';
        return [Select Id,Name from account where name like :search limit :records ];

    }
}